import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddPatternDialogComponent} from '../add-pattern-dialog/add-pattern-dialog.component';
import {Pattern} from '../models/Pattern';
import {PatternService} from '../services/pattern.service';

@Component({
    selector: 'app-resources',
    templateUrl: './patterns.component.html',
    styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

    patterns: Pattern[];

    constructor(private patternService: PatternService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.patternService.all().subscribe(patterns => {
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
