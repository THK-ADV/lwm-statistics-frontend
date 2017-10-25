import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pattern} from '../models/Pattern';
import {VariableService} from '../services/variable.service';
import {Variable} from '../models/Variable';
import {PatternService} from '../services/pattern.service';
import {MatDialog} from '@angular/material';
import {DeletionCompletionDialogComponent} from '../deletion-completion-dialog/deletion-completion-dialog.component';


export const colors: string[] = [
    '#EF5350',
    '#7E57C2',
    '#29B6F6',
    '#66BB6A',
    '#FFEE58',
    '#FF7043',
    '#78909C',
    '#EC407A'
];

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {

  @Input()
  pattern: Pattern;

  @Output() afterDelete: EventEmitter<any> = new EventEmitter();

  variables: Variable[];
  colors: string[] = [];
  colorIndex = 0;

  constructor(private variableService: VariableService, private patternService: PatternService,
              private dialog: MatDialog) { }

    ngOnInit() {
      this.generateColors();
        this.variableService.byPattern(this.pattern.id)
            .subscribe( data => this.variables = data.reverse());
    }

    onDeleteClicked() {

        const ref = this.dialog.open(DeletionCompletionDialogComponent, {
            data: this.pattern.label + ' ' + this.pattern.pattern,
        });
        ref.afterClosed().subscribe(ok => {
            if (ok) {
                this.patternService.deleteById(this.pattern.id)
                    .subscribe(data => {
                        if (data) {
                            this.afterDelete.emit(this.pattern);
                        }
                    });
            }
        });
    }

    getPatternArray(): string[] {
        return this.pattern.pattern.split('/');
    }

    isVariable(path: string): boolean {
      return path.indexOf(':') !== -1;
    }

    getColor(): string {
        return this.colors[this.colorIndex++ % this.colors.length];
    }

    private generateColors() {
      let i = 0;
        for (const p of this.getPatternArray()) {
            if (this.isVariable(p)) {
                this.colors.push(colors[i++]);
            }
        }
    }
}
