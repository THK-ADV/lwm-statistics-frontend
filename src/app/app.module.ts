import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {router} from './app.router';
import {StatisticService} from './services/statistic.service';
import {HttpModule} from '@angular/http';
import {NavService} from './services/nav.service';
import {ResourceService} from './services/resource.service';
import { PatternDetailComponent } from './pattern-detail/pattern-detail.component';
import {ChartsModule} from 'ng2-charts';
import { AddPatternDialogComponent } from './add-resource/add-pattern-dialog.component';
import { PatternsComponent } from './patterns/patterns.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddValueDialogComponent } from './add-resource-entry/add-value-dialog.component';
import { AddDetailEntryComponent } from './add-detail-entry/add-detail-entry.component';
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
    MatTableModule, MatTabsModule
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    PatternDetailComponent,
    AddPatternDialogComponent,
    PatternsComponent,
    AddValueDialogComponent,
    AddDetailEntryComponent,
    ResourceListItemComponent,
    VariablesListComponent,
    ValuesComponent,
    PatternComponent,
    VariableComponent,
    DeletionCompletionDialogComponent,
    ChartElementDetailComponent,
    ChartTableComponent,
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
      MatSortModule
  ],
  providers: [
      StatisticService,
      NavService,
      ResourceService,
      VariableService,
      ValueService,
      PatternService
  ],
  entryComponents: [
      AddPatternDialogComponent,
      AddValueDialogComponent,
      AddDetailEntryComponent,
      DeletionCompletionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
