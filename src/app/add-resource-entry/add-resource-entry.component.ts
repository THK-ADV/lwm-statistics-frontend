import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ResourceService} from '../services/resource.service';

@Component({
  selector: 'app-add-resource-entry',
  templateUrl: './add-resource-entry.component.html',
  styleUrls: ['./add-resource-entry.component.css']
})
export class AddResourceEntryComponent implements OnInit {

  resourceEntryForm: FormGroup = new FormGroup({
    label: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)
  });


  constructor(private dialogRef: MatDialogRef<AddResourceEntryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number, private resourceService: ResourceService) { }

  ngOnInit() {
  }

  submit() {
    this.resourceService.addResourceEntry(this.data, this.resourceEntryForm.value.label, this.resourceEntryForm.value.id)
        .subscribe(resEntry => this.dialogRef.close(resEntry));
  }

  myErrorStateMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    // Error when invalid control is dirty, touched, or submitted
    const isSubmitted = form && form.submitted;
    return !!(control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
