import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobOfferDetailsComponent } from './job-offer-details/job-offer-details.component';
import { JobOffersListComponent } from './job-offers-list/job-offers-list.component';
import { JobOfferApplyComponent } from './job-offer-apply/job-offer-apply.component';

const routes: Routes = [
  {
    path: '',
    component: JobOffersListComponent,
  },
  {
    path: 'details/:id',
    component: JobOfferDetailsComponent,
  },
  {
    path: 'apply/:id',
    component: JobOfferApplyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
