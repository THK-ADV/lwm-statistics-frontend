import {Component, Input, OnInit} from '@angular/core';
import {Pattern} from '../models/Pattern';
import {StatisticService} from '../services/statistic.service';

@Component({
  selector: 'app-large-dashboard-card',
  templateUrl: './pattern-dashboard-card.component.html',
  styleUrls: ['./pattern-dashboard-card.component.css']
})
export class PatternDashboardCardComponent implements OnInit {

    @Input()
    pattern: Pattern;

    statisticCount: number;

  constructor(private statisticService: StatisticService) { }

  ngOnInit() {
      this.statisticService.byPattern(this.pattern.id, new Date(2017, 1, 1, 0, 0, 0, 0), new Date(Date.now()), 'month')
          .subscribe(
              data => {
                  let count = 0;
                  data.map(s => s.dataSets.map( d => d.data.map( l => count += l.statistics.length)));
                  this.statisticCount = count;
                  console.log(data);
              },
              error => console.error(error)
          );
  }

}
