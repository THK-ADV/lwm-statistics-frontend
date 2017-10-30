import {Injectable} from '@angular/core';
import {AbstractService} from './AbstractService';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Variable} from '../models/Variable';


/**
 * Created by Florian on 28.08.2017.
 */
@Injectable()
export class VariableService extends AbstractService {

    constructor(http: Http) {
        super(http);
    }

    byPattern(id: number): Observable<Variable[]> {
        return this.get<Variable[]>('/pattern/' + id + '/variables');
    }
}
