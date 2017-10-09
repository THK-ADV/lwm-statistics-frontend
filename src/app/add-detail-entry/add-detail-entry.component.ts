import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {AddResourceEntryComponent} from '../add-resource-entry/add-resource-entry.component';
import {ResourceService} from '../services/resource.service';

@Component({
  selector: 'app-add-detail-entry',
  templateUrl: './add-detail-entry.component.html',
  styleUrls: ['./add-detail-entry.component.css']
})
export class AddDetailEntryComponent implements OnInit {

  resourceEntryForm: FormGroup = new FormGroup({
    label: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)
  });


  constructor(private dialogRef: MdDialogRef<AddResourceEntryComponent>,
              @Inject(MD_DIALOG_DATA) public data: number, private resourceService: ResourceService) { }

  ngOnInit() {
  }

  submit() {
    this.resourceService.addDetailEntry(this.data, this.resourceEntryForm.value.label, this.resourceEntryForm.value.id)
        .subscribe(resEntry => this.dialogRef.close(resEntry));
  }

  myErrorStateMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    // Error when invalid control is dirty, touched, or submitted
    const isSubmitted = form && form.submitted;
    return !!(control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
