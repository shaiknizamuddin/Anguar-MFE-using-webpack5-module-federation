import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PluginProxyComponent } from '../plugins/plugin-proxy.component';


@NgModule({
  declarations: [
    HomeComponent,
    PluginProxyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
