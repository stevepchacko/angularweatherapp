import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SbarComponent} from './sbar/sbar.component';
import {WeatherComponent} from './weather/weather.component';

const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path:"search" , component: SbarComponent},
  {path:"weather/:id", component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
