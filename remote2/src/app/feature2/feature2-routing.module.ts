import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature2Component } from './feature2.component';

const routes: Routes = [
  {
    path:'',
    component:Feature2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
