import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { SliderComponent } from './components/slider/slider.component';
import { RadardbComponent } from './components/content/radardb/radardb.component';
import { PolardbComponent } from './components/content/polardb/polardb.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app-routing.module';

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
    routing,
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
