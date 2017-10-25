import { Component, OnInit } from '@angular/core';
import {NavItem} from '../models/NavItem';
import {NavService} from '../services/nav.service';
import {Resource} from '../models/Resource';
import {ResourceService} from '../services/resource.service';
import {Pattern} from "../models/Pattern";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItems: NavItem[];
  ressources: Pattern[];

  constructor(private navService: NavService, private resourceService: ResourceService) { }

  ngOnInit() {
    this.navService.getNavItems().subscribe(
        success => this.navItems = success,
        error => console.log(error)
    );

    this.resourceService.all().subscribe(
        success => this.ressources = success,
        error => console.log(error)
    );

  }

}
