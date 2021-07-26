import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2Component } from './feature2.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    Feature2Component,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
