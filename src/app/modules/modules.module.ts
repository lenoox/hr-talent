import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import {JobOffersListComponent} from "./job-offers-list/job-offers-list.component";
import {JobOfferDetailsComponent} from "./job-offer-details/job-offer-details.component";
import {SharedModule} from "../shared/shared.module";
import { JobOfferApplyComponent } from './job-offer-apply/job-offer-apply.component';
import {ReactiveFormsModule} from "@angular/forms";
import {QuillViewComponent} from "ngx-quill";

@NgModule({
  declarations: [JobOffersListComponent,JobOfferDetailsComponent, JobOfferApplyComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    QuillViewComponent,
  ]
})
export class ModulesModule { }
