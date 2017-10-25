import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-deletion-completion-dialog',
  templateUrl: './deletion-completion-dialog.component.html',
  styleUrls: ['./deletion-completion-dialog.component.css']
})
export class DeletionCompletionDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeletionCompletionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit() {
  }

    submit(flag: boolean) {
        this.dialogRef.close(flag);
    }
}
