import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobOffersService {

  constructor(private apiService: ApiService) { }
  getAll(): Observable<any> {
    return this.apiService.get('/job-offers/');
  }
}
