import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Statistic} from '../models/Statistic';
import {AbstractService} from './AbstractService';
import {Http} from '@angular/http';
import {backendHost, backendRoutes} from '../backend.routes';
import {ResourceValue} from '../models/ResourceValue';
import {DataSetPack} from "../models/DataSetPack";

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

    byResource(resId: string, start: Date, end: Date) {
        console.log(start.getTime());
        console.log(end.getTime());
        return this.get<ResourceValue[]>(backendRoutes.statistics.byResource + '/' + resId + '/' + start.getTime() + '/' + end.getTime());

    }

    byPattern(patternId: number, start: Date, end: Date, view: string): Observable<DataSetPack[]> {
        /*return this.get<ResourceValue[]>
        (backendHost + '/pattern/' + patternId + '/statistics'/* + start.getTime() + '/' + end.getTime()*//*);*/
        return this.get<DataSetPack[]>('/pattern/' + patternId + '/statistics/' + view + '/' + start.getTime() + '/' + end.getTime());
    }

}
