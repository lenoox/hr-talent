import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import {JobOffersModule} from "./job-offers/job-offers.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    JobOffersModule
  ]
})
export class ModulesModule { }
