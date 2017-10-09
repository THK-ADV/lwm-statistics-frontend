import {ResourceEntry} from './ResourceEntry';
/**
 * Created by Florian on 28.08.2017.
 */


export enum Method {
    GET,
    POST,
    PUT,
    DELETE,
    PATCH,
    UPDATE
}

export class Resource {
    public entries: ResourceEntry[] = [];
    public detailEntries: ResourceEntry[] = [];
    constructor(
        public id: string,
        public label: string,
        public method: Method,
        public filter: string,
        public detail: string = '') {}
}
