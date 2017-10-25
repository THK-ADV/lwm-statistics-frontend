
import {Statistic} from './Statistic';

export class DateValue  {
    constructor(public date: string, public statistics: Statistic[] = []) {}
}
export class DataSet {
    constructor(public data: DateValue[] = [], public label: String) {}
}
export class DataSetPack {
    constructor(public dataSets: DataSet[] = [], public label: String) {}
}
