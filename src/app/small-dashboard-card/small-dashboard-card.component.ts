import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-dashboard-card',
  templateUrl: './small-dashboard-card.component.html',
  styleUrls: ['./small-dashboard-card.component.css']
})
export class SmallDashboardCardComponent implements OnInit {


  @Input()
  image = 'url(../../assets/header_bg.png)';

  @Input()
  leftInfo: string;

  @Input()
  rightInfo: string;

  @Input()
  leftInfoColor = '#ccc';

  @Input()
  rightInfoColor = '#ccc';

  @Input()
  matIcon: string;

  @Input()
  matIconColor = '#ddd';

  @Input()
  title: string;

  @Input()
  value: string;

  @Input()
  valueFontSize= '18pt';

  constructor() { }

  ngOnInit() {
  }

}
