import { Component, OnInit } from '@angular/core';
import {Resource} from '../models/Resource';
import {ResourceService} from '../services/resource.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {AddResourceComponent} from '../add-resource/add-resource.component';
import {AddResourceEntryComponent} from '../add-resource-entry/add-resource-entry.component';
import {AddDetailEntryComponent} from '../add-detail-entry/add-detail-entry.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: Resource[];

  constructor(private resourceService: ResourceService, private dialog: MdDialog) { }

  ngOnInit() {
    this.resourceService.all().subscribe(resources => {
        this.resources = resources;
    });
  }

  addResourceClicked() {
    const dialogRef = this.dialog.open(AddResourceComponent);
    dialogRef.afterClosed().subscribe(res => {
        this.resources.push(res);
    });
  }

}
