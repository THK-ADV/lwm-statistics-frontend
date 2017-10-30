import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Statistic} from '../models/Statistic';
import {AbstractService} from './AbstractService';
import {Http} from '@angular/http';
import {backendHost, backendRoutes} from '../backend.routes';
import {DataSetPack} from '../models/DataSetPack';

/**
 * Created by Florian on 28.08.2017.
 */

@Injectable()
export class StatisticService extends AbstractService {


    constructor(http: Http) {
        super(http);
    }

    all(): Observable<Statistic[]> {
        return this.get<Statistic[]>(backendRoutes.statistics.all);
    }

    byPattern(patternId: number, start: Date, end: Date, view: string): Observable<DataSetPack[]> {
        /*return this.get<ResourceValue[]>
        (backendHost + '/pattern/' + patternId + '/statistics'/* + start.getTime() + '/' + end.getTime()*//*);*/
        return this.get<DataSetPack[]>('/pattern/' + patternId + '/statistics/' + view + '/' + start.getTime() + '/' + end.getTime());
    }

}
