import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Feature1Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
