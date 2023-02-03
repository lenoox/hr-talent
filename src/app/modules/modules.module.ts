import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import {JobOffersListComponent} from "./job-offers-list/job-offers-list.component";
import {JobOfferDetailsComponent} from "./job-offer-details/job-offer-details.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [JobOffersListComponent,JobOfferDetailsComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
