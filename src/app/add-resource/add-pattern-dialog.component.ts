import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ResourceService} from '../services/resource.service';
import {PatternService} from '../services/pattern.service';


@Component({
    selector: 'app-add-resource',
    templateUrl: './add-pattern-dialog.component.html',
    styleUrls: ['./add-pattern-dialog.component.css']
})
export class AddPatternDialogComponent implements OnInit {

    methods = [
        'GET',
        'POST',
        'PUT',
        'UPDATE',
        'DELETE'
    ];

    patternForm: FormGroup = new FormGroup({
        label: new FormControl('', Validators.required),
        pattern: new FormControl('', Validators.required),
        method: new FormControl('', Validators.required),
    });

    constructor(private patternService: PatternService,
                public dialogRef: MatDialogRef<AddPatternDialogComponent>, private resourceService: ResourceService) {
    }

    ngOnInit() {
    }

    submit() {
        this.patternService
            .save(this.patternForm.value.label,
                this.patternForm.value.method,
                this.patternForm.value.pattern)
            .subscribe(pattern => this.dialogRef.close(pattern));
    }
}
