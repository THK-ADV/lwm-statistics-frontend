import {Component, Input, OnInit} from '@angular/core';
import {Variable} from '../models/Variable';
import {colors} from "../pattern/pattern.component";

@Component({
    selector: 'app-variables-list',
    templateUrl: './variables-list.component.html',
    styleUrls: ['./variables-list.component.css']
})
export class VariablesListComponent implements OnInit {

    @Input()
    variables: Variable[];

    constructor() {
    }

    ngOnInit() {
    }

    getColor(i: number): string {
        return colors[i];
    }

}
