import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {JobOfferResponse} from "../state/job-offer/job-offer";
import {Paginated} from "../state/paginated";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  constructor(private http: HttpClient) { }

  public fetchJobOffers(pageSize:number, currentPage:number){
    let params = new HttpParams();
    params = params.append('limit', pageSize);
    params = params.append('page', currentPage+1);
    const requestOptions = { params: params };

    return this.http.get<Paginated<JobOfferResponse>>(`${environment.apiUrl}/job-offers`,requestOptions)
  }

  public fetchJobOffer(id: string){
    return this.http.get<JobOfferResponse>(`${environment.apiUrl}/job-offers/${id}`);
  }
}
