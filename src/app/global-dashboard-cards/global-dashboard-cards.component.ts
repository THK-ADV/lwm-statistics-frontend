import {Component, OnInit} from '@angular/core';
import {StatisticService} from '../services/statistic.service';
import {Statistic} from '../models/Statistic';

@Component({
    selector: 'app-global-dashboard-cards',
    templateUrl: './global-dashboard-cards.component.html',
    styleUrls: ['./global-dashboard-cards.component.css']
})
export class GlobalDashboardCardsComponent implements OnInit {

    private statistics: Statistic[];

    constructor(private statisticsService: StatisticService) {
    }

    ngOnInit() {
        this.statisticsService.all().subscribe(
            data => this.statistics = data,
            error => console.log(error)
        );
    }

    isStatisticsLoaded(): boolean {
        return this.statistics != null;
    }

    getCountOfAllStatistics(): number {
        return this.statistics != null ? this.statistics.length : 0;
    }

    getCountOfThisMonthStatistics(): number {
        return this.getStatisticsOfThisMonth().length;
    }

    getCountOfLastMonthStatistics(): number {
        return this.getStatisticsOfLastMonth().length;
    }

    getMostActiveRoute(): string {
        const mostActiveGroup = this.getStatisticsGroupsSortedByMostActive()[0];
        return (mostActiveGroup != null) ? mostActiveGroup[0].description : 'Keine Auswertung möglich!';
    }

    getMostActiveRouteCount(): number {
        const mostActiveGroup = this.getStatisticsGroupsSortedByMostActive()[0];
        return (mostActiveGroup != null) ? mostActiveGroup.length : 0;
    }

    getStatisticsGroupsSortedByMostActive(): Array<Statistic[]> {
        return this.groupBy(this.statistics, s => s.description).sort((a, b) => a.length - b.length);
    }

    getUserGroupsSortedByMostActive(): Array<Statistic[]> {
        return this.groupBy(this.statistics, s => s.username).sort((a, b) => a.length - b.length);
    }

    getMostActiveUserName(): string {
        const mostActive = this.getUserGroupsSortedByMostActive()[0];
        return (mostActive != null) ? mostActive[0].username : 'Keine Auswertung möglich!';
    }


    getMostActiveUserStatisticCount(): number {
        const mostActive = this.getUserGroupsSortedByMostActive()[0];
        return (mostActive != null) ? mostActive.length : 0;
    }

    getStatisticsOfThisMonth(): Statistic[] {
        const startOfThisMonth = this.getCurrentMonth();
        const startOfNextMonth = this.getNextMonth();
        return this.statistics != null ? this.statistics.filter(stat =>
            new Date(stat.created).getTime() > startOfThisMonth.getTime()
            && new Date(stat.created).getTime() < startOfNextMonth.getTime()) : [];
    }

    getStatisticsOfLastMonth(): Statistic[] {
        const today = new Date();
        const startOfLastMonth = this.getLastMonth();
        const startOfThisMonth = this.getCurrentMonth();
        return this.statistics != null ? this.statistics.filter(stat =>
            new Date(stat.created).getTime() > startOfLastMonth.getTime()
        && new Date(stat.created).getTime() < startOfThisMonth.getTime()) : [];
    }

    getStatisticsOfLastLastMonth(): Statistic[] {
        const today = new Date();
        const startOfLastLastMonth = this.getLastLastMonth();
        const startOfLastMonth = this.getLastMonth();
        return this.statistics != null ? this.statistics.filter(stat =>
            new Date(stat.created).getTime() > startOfLastLastMonth.getTime()
        && new Date(stat.created).getTime() < startOfLastMonth.getTime()) : [];
    }

    getMonthCountDifferenceBetweenThisAndBeforeInPercent(): number {
        return ((this.getStatisticsOfThisMonth().length -
            this.getStatisticsOfLastMonth().length) / this.getStatisticsOfLastMonth().length) * 100;
    }

    getMonthCountDifferenceBetweenLastAndBeforeInPercent(): number {
        return ((this.getStatisticsOfLastMonth().length -
            this.getStatisticsOfLastLastMonth().length) / this.getStatisticsOfLastLastMonth().length) * 100;
    }

    getCurrentMonth(): Date {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0);
    }

    getLastMonth(): Date {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth() - 1, 1, 0, 0, 0);
    }

    getLastLastMonth(): Date {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth() - 2, 1, 0, 0, 0);
    }

    getNextMonth(): Date {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth() + 1, 1, 0, 0, 0);
    }

    groupBy(array, f) {
        const groups = {};
        array.forEach(function (o) {
            const group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    }

}
