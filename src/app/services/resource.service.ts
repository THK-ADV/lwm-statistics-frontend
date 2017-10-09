import {Injectable} from '@angular/core';
import {AbstractService} from './AbstractService';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Method, Resource} from '../models/Resource';
import {ResourceEntry} from '../models/ResourceEntry';
import {backendRoutes} from '../backend.routes';


/**
 * Created by Florian on 28.08.2017.
 */
@Injectable()
export class ResourceService extends AbstractService {

    constructor(http: Http) {
        super(http);
    }

    all(): Observable<Resource[]> {
        return this.get<Resource[]>(backendRoutes.resources.all);
    }

    byId(id: number): Observable<Resource> {
        return this.get<Resource>(backendRoutes.resources.byId + '/' + id);
    }

    save(label, method, filter, detail): Observable<Resource> {
        return this.post<Resource>(backendRoutes.resources.save, {label: label, method: method, filter: filter, detail: detail});
    }

    addResourceEntry(resId, label, id): Observable<ResourceEntry> {
        return this.post<ResourceEntry>
        (backendRoutes.resources.save + '/' + resId + backendRoutes.resources.entries.save, {label: label, entryId: id});
    }

    addDetailEntry(resId, label, id): Observable<ResourceEntry> {
        return this.post<ResourceEntry>
        (backendRoutes.resources.save + '/' + resId + backendRoutes.resources.detailEntries.save, {label: label, entryId: id});
    }

    getDetails(id: string): Observable<any> {
        console.log(backendRoutes.resources.details + '/' + id);
        return this.get<any>(backendRoutes.resources.details + '/' + id);
    }
}
