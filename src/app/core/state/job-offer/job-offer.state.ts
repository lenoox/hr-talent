import {JobOfferResponse} from "./job-offer";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {JobOfferService} from "../../services/job-offer.service";
import { tap} from "rxjs";
import { GetJobOffer, GetJobOffers} from "./job-offer.action";
import {Injectable} from "@angular/core";
import {Paginated} from "../paginated";
import {jobOfferToList} from "../../../shared/mappers/job-offer-mapper";

export class JobOffersStateModel {
  jobOffers!: Paginated<JobOfferResponse> | undefined;
  jobOffer!: JobOfferResponse | undefined;
}
@State<JobOffersStateModel>({
  name: 'jobOffers',
  defaults: {
    jobOffers: undefined,
    jobOffer: undefined
  }
})
@Injectable()
export class JobOfferState {
  constructor(private jobOffer: JobOfferService) {
  }

  @Selector()
  static getJobOfferList(state: JobOffersStateModel){
    return state.jobOffers
  }

  @Selector()
  static getJobOffer(state: JobOffersStateModel){
    return state.jobOffer
  }

  @Action(GetJobOffer)
  getJobOffer({getState,setState}: StateContext<JobOffersStateModel>,{ id }: JobOfferResponse){
    return this.jobOffer.fetchJobOffer(id).pipe(tap((result)=>{
      const state = getState();
      setState({
        ...state,
        jobOffer: result
      })
    }))
  }

  @Action(GetJobOffers)
  getJobOffers({getState,setState}: StateContext<JobOffersStateModel>,
               {pageSize, currentPage}:{pageSize:number,currentPage:number}){
    return this.jobOffer.fetchJobOffers(pageSize,currentPage).pipe(
      tap((result:Paginated<JobOfferResponse>)=>{
        const state = getState();
        const jobOfferList=result.items.map((results)=>jobOfferToList(results))
        setState({
          ...state,
          jobOffers: {
            items: jobOfferList,
            meta: result.meta
          }
        })
      })
    )
  }
}
