import {Component, Input, OnInit} from '@angular/core';
import {Pattern} from '../models/Pattern';
import {Variable} from '../models/Variable';
import {VariableService} from '../services/variable.service';

@Component({
  selector: 'app-resource-list-item',
  templateUrl: './resource-list-item.component.html',
  styleUrls: ['./resource-list-item.component.css']
})
export class ResourceListItemComponent implements OnInit {

  @Input()
  pattern: Pattern;

  variables: Variable[] = [];

  constructor(private variableService: VariableService) { }

  ngOnInit() {
    this.variableService.byPattern(this.pattern.id)
        .subscribe( data => this.variables = data);
  }

}
