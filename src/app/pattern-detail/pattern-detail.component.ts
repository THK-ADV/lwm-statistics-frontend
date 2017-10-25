import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResourceService} from '../services/resource.service';
import {StatisticService} from '../services/statistic.service';
import {BaseChartDirective} from 'ng2-charts';
import {Pattern} from '../models/Pattern';
import * as moment from 'moment';
import {DataSetPack, DateValue} from '../models/DataSetPack';

@Component({
    selector: 'app-ressource-detail',
    templateUrl: './pattern-detail.component.html',
    styleUrls: ['./pattern-detail.component.css']
})
export class PatternDetailComponent implements OnInit {

    @ViewChildren(BaseChartDirective) private charts: QueryList<BaseChartDirective>;
    pattern: Pattern;
    id: number;
    date = new Date();
    startDate = new Date(this.date.getFullYear() , this.date.getMonth(), this.date.getDate() - 7);
    endDate = new Date(this.date.getFullYear(), this.date.getMonth(),  this.date.getDate() + 1);

    // lineChart
    lineChartDataArray: Array<Array<any>>;
    lineChartLabels: any[] = [];
    lineChartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },

        hover: {
            mode: 'nearest',
            intersec: true,
        },
        interaction: {
            mode: 'nearest',
        },
    };
    lineChartLegend = true;
    lineChartType = 'bar';
    data: DataSetPack[] = [];
    view = 'day';
    tabIndex = 0;
    clickedDateValue: DateValue;

    // events
    chartClicked(e: any): void {

        const active: any = e.active;
        if (active && active.length) {

            const clicked = active[0];

            const index = clicked._index; /*with this you get the index of the segment you hovered on*/
            const datasetIndex = clicked._datasetIndex;
            this.clickedDateValue = this.data[this.tabIndex]['dataSets'][datasetIndex]['data'][index];
        }
    }

    chartHovered(e: any): void {
        console.log(e);
    }

    onChartChanged(chartType: string) {
        this.lineChartType = chartType;
    }

    constructor(private route: ActivatedRoute, private resourceService: ResourceService,
                private statisticsService: StatisticService) {
    }

    ngOnInit() {

        this.route.params
            .switchMap(params => this.resourceService.byId(+params['id']))
            .subscribe(pattern => {
                this.pattern = pattern;
                this.prepareValues();
            },
            error => console.error(error)
        );


    }

    private prepareValues() {
        this.statisticsService.byPattern(this.pattern.id, this.startDate, this.endDate, this.view)
            .subscribe(
                success => {
                    this.prepareCharts(success);
                    this.refreshCharts();
                },
                error => console.error(error)
            );
    }



    private prepareCharts(success: DataSetPack[]) {
        this.prepareLabels();
        this.prepareData(success);
    }

    private prepareData(success: DataSetPack[]) {
        this.data = success;
        if (this.lineChartDataArray != null) {
            this.lineChartDataArray.length = 0;
        } else {
            this.lineChartDataArray = [];
        }
        /*
        const tmpData = success.map(entry => {
            return entry.subs.map(sub => {
                return {label: sub.label, data: this.toMonthData(sub.values)};
            });
        });
        tmpData.reverse();
        for (let i = tmpData.length - 1; i >= 0; i--) {
            this.lineChartDataArray.push(tmpData[i]);
        }*/
        success.map(data => data['dataSets']).forEach(value => {

            this.lineChartDataArray.push(value.map(v => {
                return {'label': v.label, 'data': v.data.map(d => d.statistics.length)};
            }));
        });
    }

    private prepareLabels() {
        if (this.lineChartLabels != null) {
            this.lineChartLabels.length = 0;
        } else {
            this.lineChartLabels = [];
        }
        switch (this.view) {
            case 'day':
                this.forEachDay(d =>
                    this.lineChartLabels.push(
                        moment(d).format('DD.MM.YYYY')
                    )
                );
                break;
            case 'week':
                this.forEachWeak(d =>
                    this.lineChartLabels.push(
                        moment(d).startOf('week').format('DD') + ' - ' +
                        moment(d).endOf('week').format('DD') +
                        moment(d).format('.MM.YYYY')
                    )
                );
                break;
            case 'month':
                this.forEachMonth(d =>
                    this.lineChartLabels.push(
                        moment(d).format('MMMM YYYY')
                    )
                );
            break;
        }

    }
    private forEachMonth(f: (d: Date) => void) {
        const start = new Date(this.startDate.getTime());
        const end = new Date(this.endDate.getTime());
        for (const d: Date = new Date(start);
             d.getTime() <= end.getTime(); d.setMonth(d.getMonth() + 1)) {
            f(d);
        }
    }

    private forEachWeak(f: (d: Date) => void) {
        const start = new Date(this.startDate.getTime());
        const end = new Date(this.endDate.getTime());
        for (const d: Date = new Date(start);
             d.getTime() <= end.getTime(); d.setDate(d.getDate() + 7)) {
            f(d);
        }
    }

    private forEachDay(f: (d: Date) => void) {
        const start = new Date(this.startDate.getTime());
        const end = new Date(this.endDate.getTime());
        for (const d: Date = new Date(start);
             d.getTime() <= end.getTime(); d.setDate(d.getDate() + 1)) {
            f(d);
        }
    }

    private refreshCharts() {
        this.charts.forEach((chart) => chart.chart.update());
    }

    public onStartChange(event: any) {
        const eventDate = new Date(event.value);
        this.startDate = new Date(eventDate);
        this.prepareValues();
    }

    public onEndChange(event: any) {
        const eventDate = new Date(event.value);
        this.endDate = new Date(eventDate);
        this.prepareValues();
    }

    onViewChanged(view: string) {
        this.view = view;
        this.prepareValues();
    }

/*
    private filterDate(stat: Statistic, start: Date, end: Date): boolean {
        return new Date(stat.created).getFullYear() >= start.getFullYear()
                && new Date(stat.created).getMonth() >= start.getMonth()
                && new Date(stat.created).getFullYear() <= end.getFullYear()
                && new Date(stat.created).getMonth() <= end.getMonth();
    }

    private toMonthData(sd: Statistic[]) {
        const monthData: number[] = [];
        this.forEachMonth(d => monthData.push(sd.filter(s => this.filterDate(s, d, d)).length));
        return monthData;
    }
    */
}
