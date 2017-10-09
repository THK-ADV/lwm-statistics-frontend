import { Component, OnInit } from '@angular/core';
import {StatisticService} from '../services/statistic.service';
import {Statistic} from '../models/Statistic';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  statistics: Statistic[];

  constructor(private statisticService: StatisticService) { }

  ngOnInit() {
    this.statisticService.all().subscribe(
        success => this.statistics = success,
        error => console.log(error)
    );
  }

}
