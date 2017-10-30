import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {router} from './app.router';
import {StatisticService} from './services/statistic.service';
import {HttpModule} from '@angular/http';
import { PatternDetailComponent } from './pattern-detail/pattern-detail.component';
import {ChartsModule} from 'ng2-charts';
import { AddPatternDialogComponent } from './add-pattern-dialog/add-pattern-dialog.component';
import { PatternsComponent } from './patterns/patterns.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddValueDialogComponent } from './add-value-dialog/add-value-dialog.component';
import { ResourceListItemComponent } from './resource-list-item/resource-list-item.component';
import {
    MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule,
    MatSidenavModule,
    MatSliderModule, MatSlideToggleModule, MatSortModule,
    MatTableModule, MatTabsModule, MatToolbar, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {VariableService} from './services/variable.service';
import { VariablesListComponent } from './variables-list/variables-list.component';
import { ValuesComponent } from './variable-values/values.component';
import { PatternComponent } from './pattern/pattern.component';
import { VariableComponent } from './variable/variable.component';
import {ValueService} from './services/value.service';
import {PatternService} from './services/pattern.service';
import { DeletionCompletionDialogComponent } from './deletion-completion-dialog/deletion-completion-dialog.component';
import {MomentModule} from 'angular2-moment';
import { ChartElementDetailComponent } from './chart-element-detail/chart-element-detail.component';
import { ChartTableComponent } from './chart-table/chart-table.component';
import { GlobalDashboardCardsComponent } from './global-dashboard-cards/global-dashboard-cards.component';
import { PatternDashboardCardsComponent } from './pattern-dashboard-cards/pattern-dashboard-cards.component';
import { SmallDashboardCardComponent } from './small-dashboard-card/small-dashboard-card.component';
import { PatternDashboardCardComponent } from './pattern-dashboard-card/pattern-dashboard-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    PatternDetailComponent,
    AddPatternDialogComponent,
    PatternsComponent,
    AddValueDialogComponent,
    ResourceListItemComponent,
    VariablesListComponent,
    ValuesComponent,
    PatternComponent,
    VariableComponent,
    DeletionCompletionDialogComponent,
    ChartElementDetailComponent,
    ChartTableComponent,
    GlobalDashboardCardsComponent,
    PatternDashboardCardsComponent,
    SmallDashboardCardComponent,
    PatternDashboardCardComponent,
  ],
  imports: [
    BrowserModule,
      HttpModule,
    BrowserAnimationsModule,
      router,
    MatDialogModule,
      MatSidenavModule,
      MatButtonModule,
      MatListModule,
      MatSliderModule,
      MatTabsModule,
      MatIconModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatExpansionModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatButtonToggleModule,
      ChartsModule,
    ReactiveFormsModule,
      MatSlideToggleModule,
      MatChipsModule,
      MomentModule,
      MatPaginatorModule,
      MatTableModule,
      MatSortModule,
      MatTooltipModule,
      MatToolbarModule
  ],
  providers: [
      StatisticService,
      VariableService,
      ValueService,
      PatternService
  ],
  entryComponents: [
      AddPatternDialogComponent,
      AddValueDialogComponent,
      DeletionCompletionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
