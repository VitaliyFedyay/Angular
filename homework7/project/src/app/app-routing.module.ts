import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'dashboard', component: DashboardComponent},
{ path: 'table', component: TableComponent},
{ path: 'list', component: ListComponent },
{ path: 'slider', component: SliderComponent },
{ path: 'home', component: HomeComponent },
{ path: '**', redirectTo: '' }];

export const routing = RouterModule.forRoot(routes);
