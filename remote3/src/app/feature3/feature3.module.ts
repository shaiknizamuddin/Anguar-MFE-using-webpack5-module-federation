import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3RoutingModule } from './feature3-routing.module';
import { Feature3Component } from './feature3.component';

import {DialogModule} from 'primeng/dialog';
import { PluginProxyComponent } from '../plugins/plugin-proxy.component';


@NgModule({
  declarations: [
    Feature3Component,
    PluginProxyComponent
  ],
  imports: [
    CommonModule,
    Feature3RoutingModule,
    DialogModule
  ]
})
export class Feature3Module { }
