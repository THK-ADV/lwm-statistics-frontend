import { Component, OnInit } from '@angular/core';
import {PatternService} from '../services/pattern.service';
import {Pattern} from '../models/Pattern';
import {StatisticService} from '../services/statistic.service';
import {Statistic} from '../models/Statistic';

@Component({
  selector: 'app-pattern-dashboard-cards',
  templateUrl: './pattern-dashboard-cards.component.html',
  styleUrls: ['./pattern-dashboard-cards.component.css']
})
export class PatternDashboardCardsComponent implements OnInit {

  patterns: Pattern[];
  statistics: Statistic[];

  constructor(private patternService: PatternService, private statisticsService: StatisticService) { }

  ngOnInit() {
    this.patternService.all()
        .switchMap(
            data => {
              this.patterns = data.sort((a , b) => (a.label < b.label) ? -1 : 1);
              return this.statisticsService.all();
            }
        ).subscribe(
        data => this.statistics = data,
        error => console.log(error)
    );
  }
}
