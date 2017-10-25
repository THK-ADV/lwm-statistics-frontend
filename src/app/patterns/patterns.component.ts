import { Component, OnInit } from '@angular/core';
import {Resource} from '../models/Resource';
import {ResourceService} from '../services/resource.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AddPatternDialogComponent} from '../add-resource/add-pattern-dialog.component';
import {AddValueDialogComponent} from '../add-resource-entry/add-value-dialog.component';
import {AddDetailEntryComponent} from '../add-detail-entry/add-detail-entry.component';
import {Pattern} from '../models/Pattern';
import {PatternService} from '../services/pattern.service';
import {DeletionCompletionDialogComponent} from '../deletion-completion-dialog/deletion-completion-dialog.component';

@Component({
  selector: 'app-resources',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

    patterns: Pattern[];

  constructor(private resourceService: ResourceService, private dialog: MatDialog, private patternService: PatternService) { }

  ngOnInit() {
    this.resourceService.all().subscribe(patterns => {
        this.patterns = patterns;
    });
  }

    addPatternClicked() {

        const dialogRef = this.dialog.open(AddPatternDialogComponent);
        dialogRef.afterClosed().subscribe(pattern => {
            if (pattern) {
                this.patterns.push(pattern);
            }
        });

    }

    onDeleteClicked(pattern: Pattern) {
        const index = this.patterns.indexOf(pattern, 0);
        if (index > -1) {
            this.patterns.splice(index, 1);
        }
    }

}
