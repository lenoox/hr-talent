import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { JobOfferState } from '../../../core/state/job-offer/job-offer.state';
import { Observable } from 'rxjs';
import { JobOfferResponse } from '../../../core/state/job-offer/job-offer';

@Component({
  selector: 'app-job-offer-header',
  templateUrl: './job-offer-header.component.html',
  styleUrls: ['./job-offer-header.component.scss'],
})
export class JobOfferHeaderComponent {
  @Select(JobOfferState.getJobOffer)
  jobOffer$!: Observable<JobOfferResponse>;
  jobOfferBackground = 'job-offer-bg.png';
  constructor() {}
}
