import {Injectable} from '@angular/core';
import {AbstractService} from './AbstractService';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Value} from '../models/Value';


/**
 * Created by Florian on 28.08.2017.
 */
@Injectable()
export class ValueService extends AbstractService {

    constructor(http: Http) {
        super(http);
    }

    byVariable(id: number): Observable<Value[]> {
        return this.get<Value[]>('/variables/' + id + '/values');
    }

    add(id: number, name, uuid: string): Observable<Value> {
        return this.post<Value>('/variables/' + id + '/values', {name: name, uuid: uuid});
    }

    remove(id: number): Observable<boolean> {
        return this.deleteRequest('/values/' + id);
    }
}
