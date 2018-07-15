import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiamondComponent }      from './diamond/diamond.component';
import { HourglassComponent }      from './hourglass/hourglass.component';

const routes: Routes = [
  { path: 'hourglass', component: HourglassComponent },
  { path: 'diamond', component: DiamondComponent },
];

@NgModule({
  exports: [RouterModule],
  imports :[RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
