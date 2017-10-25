

import {Injectable} from '@angular/core';
import {AbstractService} from './AbstractService';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Pattern} from '../models/Pattern';

@Injectable()
export class PatternService extends AbstractService {

    constructor(http: Http) {
        super(http);
    }

    deleteById(id: number): Observable<any> {
        return this.deleteRequest<any>('/pattern/' + id);
    }

    save(label, method, pattern): Observable<Pattern> {
        return this.post<Pattern>('/pattern', {label: label, pattern: pattern, method: method});
    }
}
