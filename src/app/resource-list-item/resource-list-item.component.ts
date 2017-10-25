import {Component, Input, OnInit} from '@angular/core';
import {Resource} from '../models/Resource';
import {MatDialog} from '@angular/material';
import {AddValueDialogComponent} from '../add-resource-entry/add-value-dialog.component';
import {AddDetailEntryComponent} from '../add-detail-entry/add-detail-entry.component';
import {ResourceService} from '../services/resource.service';
import {Pattern} from "../models/Pattern";
import {Variable} from "../models/Variable";
import {VariableService} from "../services/variable.service";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-resource-list-item',
  templateUrl: './resource-list-item.component.html',
  styleUrls: ['./resource-list-item.component.css']
})
export class ResourceListItemComponent implements OnInit {

  @Input()
  pattern: Pattern;

  variables: Variable[] = [];

  constructor(private dialog: MatDialog, private resourceService: ResourceService, private variableService: VariableService) { }

  ngOnInit() {
    this.variableService.byPattern(this.pattern.id)
        .subscribe( data => this.variables = data);
  }

  addResourceEntryClicked() {
    /*
    const dialogRef = this.dialog.open(AddValueDialogComponent, { data: this.pattern.id });
    dialogRef.afterClosed().subscribe(res => {
      this.pattern.entries.push(res);
    });
    */
  }

  addDetailEntryClicked() {
    /*
    const dialogRef = this.dialog.open(AddDetailEntryComponent, { data: this.pattern.id });
    dialogRef.afterClosed().subscribe(res => {
      this.pattern.detailEntries.push(res);
    });
    */
  }

}
