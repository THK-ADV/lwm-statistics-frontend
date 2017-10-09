import {ChangeDetectorRef, Component, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {Resource} from '../models/Resource';
import {ActivatedRoute} from '@angular/router';
import {ResourceService} from '../services/resource.service';
import {Statistic} from '../models/Statistic';
import {StatisticService} from '../services/statistic.service';
import {ResourceEntry} from '../models/ResourceEntry';
import {ResourceValue} from '../models/ResourceValue';
import {ResourceSubValue} from '../models/ResourceSubValue';
import {BaseChartDirective} from 'ng2-charts';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-ressource-detail',
    templateUrl: './resource-detail.component.html',
    styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {

    @ViewChildren(BaseChartDirective) private charts: QueryList<BaseChartDirective>;
    resource: Resource;
    id: number;
    date = new Date();
    startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);

    months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

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
        }
    };
    lineChartLegend = true;
    lineChartType = 'line';
    resourceValues: ResourceValue[] = [];

    // events
    chartClicked(e: any): void {
        console.log(e);
    }

    chartHovered(e: any): void {
        console.log(e);
    }


    constructor(private route: ActivatedRoute, private resourceService: ResourceService,
                private statisticsService: StatisticService) {
    }

    ngOnInit() {
        this.route.params
            .switchMap(params => this.resourceService.byId(+params['id']))
            .subscribe(resource => {
                this.resource = resource;
                this.resourceService.getDetails(this.resource.id)
                    .subscribe(result => {
                        console.log(result);
                        this.resource.detailEntries = result.detailEntries ? result.detailEntries : [];
                        this.resource.entries = result.entries ? result.entries : [];
                    });
                this.prepareValues();
            },
            error => console.error(error)
        );

    }

    private prepareValues() {
        return this.statisticsService.byResource(this.resource.id, this.startDate, this.endDate)
            .subscribe(
                success => {
                    this.prepareCharts(success);
                    this.refreshCharts();
                },
                error => console.error(error)
            );
    }


    private prepareCharts(success: ResourceValue[]) {
        this.resourceValues = success;
        this.prepareLabels();
        this.prepareData(success);
    }

    private prepareData(success: ResourceValue[]) {
        if (this.lineChartDataArray != null) {
            this.lineChartDataArray.length = 0;
        } else {
            this.lineChartDataArray = [];
        }
        const tmpData = success.map(entry => {
            return entry.subs.map(sub => {
                return {label: sub.label, data: this.toMonthData(sub.values)};
            });
        });
        tmpData.reverse();
        for (let i = tmpData.length - 1; i >= 0; i--) {
            this.lineChartDataArray.push(tmpData[i]);
        }
    }


    private filterDate(stat: Statistic, start: Date, end: Date): boolean {
        return new Date(stat.created).getFullYear() >= start.getFullYear()
                && new Date(stat.created).getMonth() >= start.getMonth()
                && new Date(stat.created).getFullYear() <= end.getFullYear()
                && new Date(stat.created).getMonth() <= end.getMonth();
    }

    private prepareLabels() {
        if (this.lineChartLabels != null) {
            this.lineChartLabels.length = 0;
        } else {
            this.lineChartLabels = [];
        }
        this.forEachMonth(d => this.lineChartLabels.push(this.months[(d.getMonth()) % this.months.length] + ' ' + d.getFullYear()));
    }

    private forEachMonth(f: (d: Date) => void) {
        const start = new Date(this.startDate.getTime());
        start.setMonth(start.getMonth());
        const end = new Date(this.endDate.getTime());
        end.setMonth(end.getMonth() + 1);
        for (const d: Date = new Date(start);
             d.getTime() < end.getTime(); d.setMonth(d.getMonth() + 1)) {
            f(d);
        }
    }

    private toMonthData(sd: Statistic[]) {
        const monthData: number[] = [];
        this.forEachMonth(d => monthData.push(sd.filter(s => this.filterDate(s, d, d)).length));
        return monthData;
    }

    public onStartChange(event: any) {
        const eventDate = new Date(event.value);
        this.startDate = new Date(eventDate.getFullYear(), eventDate.getMonth(), 1);
        this.prepareValues();
    }

    public onEndChange(event: any) {
        const eventDate = new Date(event.value);
        this.endDate = new Date(eventDate.getFullYear(), eventDate.getMonth(), 1);
        this.prepareValues();
    }

    private refreshCharts() {
        this.charts.forEach((chart) => chart.chart.update());
    }
}
