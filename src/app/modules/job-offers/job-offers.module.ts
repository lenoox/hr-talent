import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOffersRoutingModule } from './job-offers-routing.module';
import {JobOffersComponent} from "./job-offers.component";

@NgModule({
  declarations: [JobOffersComponent],
  imports: [
    CommonModule,
    JobOffersRoutingModule
  ],

})
export class JobOffersModule { }
