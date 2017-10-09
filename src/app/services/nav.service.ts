import {Injectable} from '@angular/core';
import {AbstractService} from './AbstractService';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {NavItem} from '../models/NavItem';
/**
 * Created by Florian on 28.08.2017.
 */
@Injectable()
export class NavService extends AbstractService {


    constructor(http: Http) {
        super(http);
    }

    getNavItems(): Observable<NavItem[]> {
        return Observable.of([
            new NavItem('Dashbaord', 'dashboard'),
            new NavItem('Resources', 'resources'),
        ]);
    }

}
