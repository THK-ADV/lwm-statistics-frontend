import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataSet, DataSetPack, DateValue} from '../models/DataSetPack';
import {MatPaginator, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-chart-table',
    templateUrl: './chart-table.component.html',
    styleUrls: ['./chart-table.component.css']
})
export class ChartTableComponent implements OnInit {

    @Input()
    dataSetPack: DataSetPack;

    displayedColumns = ['date'];
    displayedColumnNames = ['Date'];
    exampleDatabase;
    dataSource: ExampleDataSource | null;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.exampleDatabase = new ExampleDatabase(this.dataSetPack);
        this.dataSetPack.dataSets.map(v => v.label).map(c => {
            this.displayedColumns.push(c.toString());
            this.displayedColumnNames.push(c.toString());
        });
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    }

    toDate(value: string): Date {
        return  new Date(value);
    }

}


/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    get data(): any[] {
        return this.dataChange.value;
    }

    constructor(data: DataSetPack) {

        const all: DateValue[] = [];

        data.dataSets.map(ds => ds.data.map(d => all.push(d)));

        this.groupBy(all,
            item => new Date(new Date(item.date).getFullYear(),
                new Date(item.date).getMonth(), new Date(item.date).getDate(), 0, 0, 0, 0))
            .map(s => {
                const row: any = {};
                s.forEach( e => {
                    row[e.dataSetLabel] = e.statistics.length;
                    row['date'] = e.date;
                });
                const copiedData = this.data.slice();
                copiedData.push(row);
                this.dataChange.next(copiedData);
            });
    }

    groupBy( array , f ) {
        const groups = {};
        array.forEach( function( o )
        {
            const group = JSON.stringify( f(o) );
            groups[group] = groups[group] || [];
            groups[group].push( o );
        });
        return Object.keys(groups).map( function( group )
        {
            return groups[group];
        });
    }
}

export class ExampleDataSource extends DataSource<any> {
    constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MatPaginator, private _sort: MatSort) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._paginator.page,
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            const data = this.getSortedData().slice();

            // Grab the page's slice of data.
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
        });
    }

    disconnect() {
    }


    getSortedData(): any[] {
        const data = this._exampleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            [propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];


            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }
}
