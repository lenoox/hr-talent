import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOffersRoutingModule } from './job-offers-routing.module';
import {JobOffersComponent} from "./job-offers.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [JobOffersComponent],
    imports: [
        CommonModule,
        JobOffersRoutingModule,
        SharedModule
    ],

})
export class JobOffersModule { }
