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
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import {ChartsModule} from 'ng2-charts';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { ResourcesComponent } from './resources/resources.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddResourceEntryComponent } from './add-resource-entry/add-resource-entry.component';
import { AddDetailEntryComponent } from './add-detail-entry/add-detail-entry.component';
import { ResourceListItemComponent } from './resource-list-item/resource-list-item.component';
import {
    MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatMenuModule, MatNativeDateModule, MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatTableModule, MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    ResourceDetailComponent,
    AddResourceComponent,
    ResourcesComponent,
    AddResourceEntryComponent,
    AddDetailEntryComponent,
    ResourceListItemComponent,
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
      MatTableModule,
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
      ChartsModule,
    ReactiveFormsModule,
  ],
  providers: [
      StatisticService,
      NavService,
      ResourceService
  ],
  entryComponents: [
      AddResourceComponent,
      AddResourceEntryComponent,
      AddDetailEntryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
