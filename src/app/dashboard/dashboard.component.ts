import { Component, OnInit } from '@angular/core';
import {StatisticService} from '../services/statistic.service';
import {Statistic} from '../models/Statistic';
import {PatternService} from '../services/pattern.service';
import {Pattern} from '../models/Pattern';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private statistics: Statistic[];
  private pattern: Pattern[];

  constructor(private statisticService: StatisticService, private patternService: PatternService) { }

  ngOnInit() {
    this.statisticService.all().subscribe(
        success => this.statistics = success,
        error => console.log(error)
    );

    this.patternService.all().subscribe(
        data => this.pattern = data,
        error => console.log(error)
    );
  }

  getNumberOfAllStatistics(): number {
    return this.statistics.length;
  }

  isStatisticsLoaded(): boolean {
    return this.statistics != null;
  }

  getStatistics(): Statistic[] {
    return this.statistics;
  }
}
