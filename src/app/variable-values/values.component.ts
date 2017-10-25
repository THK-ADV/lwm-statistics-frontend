import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Value} from '../models/Value';
import {ValueService} from '../services/value.service';
import {MatDialog} from '@angular/material';
import {DeletionCompletionDialogComponent} from '../deletion-completion-dialog/deletion-completion-dialog.component';

@Component({
  selector: 'app-variable-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  @Input()
  values: Value[];

  @Output() afterDelete: EventEmitter<any> = new EventEmitter();


  constructor(private valueService: ValueService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteClick(value: Value) {

    const ref = this.dialog.open(DeletionCompletionDialogComponent, {
      data: value.name + ' ' + value.uuid
    });

    ref.afterClosed().subscribe( ok => {
      if (ok) {
          this.valueService.remove(value.id)
              .subscribe(data => {
                      if (data) {
                          this.afterDelete.emit(value);
                      }
                  }
              );
      }
    });


  }

}
