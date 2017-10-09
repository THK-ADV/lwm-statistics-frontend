import {ResourceSubValue} from './ResourceSubValue';
/**
 * Created by Florian on 04.09.2017.
 */

export class ResourceValue {
    constructor(public label: string, public subs: ResourceSubValue[] = []) {}
}
