import {Component, Input, OnInit} from '@angular/core';
import {Variable} from '../models/Variable';
import {Value} from '../models/Value';
import {ValueService} from '../services/value.service';
import {MatDialog} from '@angular/material';
import {AddValueDialogComponent} from '../add-value-dialog/add-value-dialog.component';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {

  @Input()
  variable: Variable;

  values: Value[];

  @Input()
  color: string;

  constructor(private valueService: ValueService, private dialog: MatDialog) { }

  ngOnInit() {
    this.valueService.byVariable(this.variable.id)
        .subscribe(values => this.values = values);
  }

    addValueClicked() {
      const ref = this.dialog.open(AddValueDialogComponent, {
        data: this.variable
      });
      ref.afterClosed().subscribe( value => {
        if (value) {
            this.values.push(value);
        }
      });
    }
    afterDeleteValue(value: Value) {
        const index = this.values.indexOf(value, 0);
        if (index > -1) {
            this.values.splice(index, 1);
        }
    }


}
