import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Statistic} from '../models/Statistic';
import {AbstractService} from './AbstractService';
import {Http} from '@angular/http';
import {backendRoutes} from '../backend.routes';
import {ResourceValue} from '../models/ResourceValue';

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

}
