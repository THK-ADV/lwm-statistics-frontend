import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {backendHost} from '../backend.routes';

/**
 * Created by Florian on 13.07.2017.
 */
export class AbstractService {

    constructor(protected http: Http) {}

    private handleError (error: Response) {
        return Observable.throw(error.text());
    }

    private extractData(res: Response) {
        return res.json().result;
    }

    protected post<T>(route: string, body: any = {}): Observable<T> {
        return this.http.post(
            backendHost + route,
            JSON.stringify(body),
            {headers: this.prepareHeader()})
            .map(this.extractData)
            .catch(error => this.handleError(error));
    }

    protected put<T>(route: string, body: any = {}): Observable<T> {
        return this.http.post(
            backendHost + route,
            JSON.stringify(body),
            {headers: this.prepareHeader()})
            .map(this.extractData)
            .catch(error => this.handleError(error));
    }

    protected get<T>(route: string): Observable<T> {
        return this.http.get(
            backendHost + route,
            {headers: this.prepareHeader()})
            .map(this.extractData)
            .catch(error => this.handleError(error));
    }

    protected delete<T>(route: string, body: any = {}): Observable<T> {
        return this.http.delete(
            backendHost + route,
            {
                headers: this.prepareHeader(),
                body: JSON.stringify(body)
            })
            .map(this.extractData)
            .catch(error => this.handleError(error));
    }

    protected patch<T>(route: string, body: any = {}): Observable<T> {
        return this.http.patch(
            backendHost + route,
            JSON.stringify(body),
            {headers: this.prepareHeader()})
            .map(this.extractData)
            .catch(error => this.handleError(error));
    }

    private prepareHeader() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}
