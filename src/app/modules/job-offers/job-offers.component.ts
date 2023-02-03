import { Component, OnInit } from '@angular/core';
import {DeleteJobOffer, GetJobOffers} from "../../core/state/job-offer/job-offer.action";
import {Paginated} from "../../core/state/paginated";
import {Select, Store} from "@ngxs/store";
import {JobOfferState} from "../../core/state/job-offer/job-offer.state";
import {Observable} from "rxjs";
import {JobOfferResponse} from "../../core/state/job-offer/job-offer";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss']
})
export class JobOffersComponent implements OnInit {
  @Select(JobOfferState.getJobOfferList) jobOffers$!: Observable<Paginated<JobOfferResponse[]>>
  columnHeader = {
    nr: 'nr',
    position: 'position',
    seniorities: 'seniorities',
    locations: 'locations',
    actions: 'actions',
  };
  pageSize = 5;
  currentPage = 0;
  constructor(private store:Store) {
  }

  ngOnInit(): void {
    this.loadJobOffers();
  }

  pageChanged() {
    this.loadJobOffers();
  }

  deleteChanged(id:string) {
    this.store.dispatch(new DeleteJobOffer(id));
  }

  loadJobOffers() {
    return this.store.dispatch(new GetJobOffers(this.pageSize,this.currentPage))
  }
}
