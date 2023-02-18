import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidateResponse } from '../state/candidate/candidate';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  constructor(private http: HttpClient) {}

  public addCandidate(data: any, id: string) {
    return this.http.post<CandidateResponse>(
      `${environment.apiUrl}/candidates/${id}`,
      data
    );
  }
}
