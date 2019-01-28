import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { SliderComponent } from './slider/slider.component';
import {Routes, RouterModule} from '@angular/router';
import { RadardbComponent } from './content/radardb/radardb.component';
import { PolardbComponent } from './content/polardb/polardb.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'table', component: TableComponent},
  { path: 'list', component: ListComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    ListComponent,
    SliderComponent,
    RadardbComponent,
    PolardbComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
