import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DateValue} from '../models/DataSetPack';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {Statistic} from '../models/Statistic';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-chart-element-detail',
    templateUrl: './chart-element-detail.component.html',
    styleUrls: ['./chart-element-detail.component.css']
})
export class ChartElementDetailComponent implements OnInit, OnChanges {

    @Input()
    dateValue: DateValue;

    searchForm: FormGroup = new FormGroup({
        query: new FormControl('')
    });

    displayedColumns = ['id', 'created', 'username', 'description', 'payload'];
    exampleDatabase;
    statisticSource: ExampleDataSource | null;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('filter') filterElement: ElementRef;

    ngOnInit() {
    }


    ngOnChanges(changes: SimpleChanges): void {
        this.exampleDatabase = new ExampleDatabase(this.dateValue.statistics);
        this.statisticSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        Observable.fromEvent(this.filterElement.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.statisticSource) { return; }
                this.statisticSource.filter = this.filterElement.nativeElement.value;
    });
    }

    filter() {
        this.exampleDatabase.filter(this.searchForm.value.query);
    }
}


export class ExampleDatabase {

    dataChange: BehaviorSubject<Statistic[]> = new BehaviorSubject<Statistic[]>([]);
    get data(): Statistic[] { return this.dataChange.value; }

    constructor(private statistics: Statistic[]) {
        this.statistics.forEach(s => {
            const copiedData = this.data.slice();
            copiedData.push(s);
            this.dataChange.next(copiedData);
        });
    }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    constructor(private _exampleDatabase: ExampleDatabase, private paginator: MatPaginator, private _sort: MatSort) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Statistic[]> {
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this.paginator.page,
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            const data = this.getSortedData().slice().filter((item: Statistic) => {
                const searchStr = item.payload.toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });

            // Grab the page's slice of data.
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        });
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
    disconnect() {}
}
