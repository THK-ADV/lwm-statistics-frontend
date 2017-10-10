import {Component, Input, OnInit} from '@angular/core';
import {Resource} from '../models/Resource';
import {MatDialog} from '@angular/material';
import {AddResourceEntryComponent} from '../add-resource-entry/add-resource-entry.component';
import {AddDetailEntryComponent} from '../add-detail-entry/add-detail-entry.component';
import {ResourceService} from '../services/resource.service';

@Component({
  selector: 'app-resource-list-item',
  templateUrl: './resource-list-item.component.html',
  styleUrls: ['./resource-list-item.component.css']
})
export class ResourceListItemComponent implements OnInit {

  @Input()
  resource: Resource;

  constructor(private dialog: MatDialog, private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getDetails(this.resource.id)
        .subscribe(result => {
          console.log(result);
          this.resource.detailEntries = result.detailEntries ? result.detailEntries : [];
          this.resource.entries = result.entries ? result.entries : [];
        });
  }

  addResourceEntryClicked() {
    const dialogRef = this.dialog.open(AddResourceEntryComponent, { data: this.resource.id });
    dialogRef.afterClosed().subscribe(res => {
      this.resource.entries.push(res);
    });
  }

  addDetailEntryClicked() {
    const dialogRef = this.dialog.open(AddDetailEntryComponent, { data: this.resource.id });
    dialogRef.afterClosed().subscribe(res => {
      this.resource.detailEntries.push(res);
    });
  }

}
