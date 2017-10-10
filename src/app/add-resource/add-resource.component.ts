import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ResourceService} from '../services/resource.service';

const methods = [
    'GET',
    'POST',
    'PUT',
    'UPDATE',
    'DELETE'
];

@Component({
    selector: 'app-add-resource',
    templateUrl: './add-resource.component.html',
    styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

    resourceForm: FormGroup = new FormGroup({
        label: new FormControl('', Validators.required),
        filter: new FormControl('', Validators.required),
        detail: new FormControl('', Validators.required),
        method: new FormControl('', Validators.required),
    });

    constructor(public dialogRef: MatDialogRef<AddResourceComponent>, private resourceService: ResourceService) {
    }

    ngOnInit() {
    }

    myErrorStateMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
        // Error when invalid control is dirty, touched, or submitted
        const isSubmitted = form && form.submitted;
        return !!(control.invalid && (control.dirty || control.touched || isSubmitted));
    }

    submit() {
        this.resourceService
            .save(this.resourceForm.value.label,
                this.resourceForm.value.method,
                this.resourceForm.value.filter,
                this.resourceForm.value.detail)
            .subscribe(resource => this.dialogRef.close(resource));
    }

    getMethods() {
        return methods;
    }
}
