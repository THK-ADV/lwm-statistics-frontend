import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValueService} from '../services/value.service';
import {Variable} from '../models/Variable';

@Component({
  selector: 'app-add-resource-entry',
  templateUrl: './add-value-dialog.component.html',
  styleUrls: ['./add-value-dialog.component.css']
})
export class AddValueDialogComponent implements OnInit {

  resourceEntryForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    uuid: new FormControl('', Validators.required)
  });


  constructor(private dialogRef: MatDialogRef<AddValueDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public variable: Variable,
              private valueService: ValueService) { }

  ngOnInit() {
  }

  submit() {
    this.valueService.add(this.variable.id, this.resourceEntryForm.value.name, this.resourceEntryForm.value.uuid)
        .subscribe(value => this.dialogRef.close(value));
  }
}
