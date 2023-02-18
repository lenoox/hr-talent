import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  combineLatest,
  forkJoin,
  mergeMap,
  Observable,
  of,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCandidate } from '../../core/state/candidate/candidate.action';
import { Location } from '../../core/state/location';
import { compareWith } from '../../core/utils/compare.utils';
import { CandidateRequest } from '../../core/state/candidate/candidate';
import { candidateFormToReqest } from '../../shared/mappers/candidates-mapper';
import { CandidateState } from '../../core/state/candidate/candidate.state';
import { DirectoryState } from '../../core/state/directory/directory.state';
import { Seniority } from '../../core/state/seniority';
import { NotificationService } from '../../core/services/notification.service';
import { GetJobOffer } from '../../core/state/job-offer/job-offer.action';
import { JobOfferState } from '../../core/state/job-offer/job-offer.state';
import { JobOfferResponse } from '../../core/state/job-offer/job-offer';

@Component({
  selector: 'app-job-offer-apply',
  templateUrl: './job-offer-apply.component.html',
  styleUrls: ['./job-offer-apply.component.scss'],
})
export class JobOfferApplyComponent implements OnInit {
  @Select(JobOfferState.getJobOffer) jobOffer$!: Observable<JobOfferResponse>;
  @Select(CandidateState.getCandidate)
  candidate$!: Observable<CandidateRequest>;
  @Select(DirectoryState.getLocations) locations$!: Observable<Location[]>;
  @Select(DirectoryState.getSeniorities) seniorities$!: Observable<Seniority[]>;
  routeId!: Subscription;
  jobOfferId: string = '';
  jobOfferForm: any;

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.routeId = this.route?.params
      .pipe(
        tap(params => {
          this.jobOfferId = params['id'];
        }),
        mergeMap(() => {
          return this.store.dispatch(new GetJobOffer(this.jobOfferId));
        })
      )
      .subscribe();
    this.jobOfferForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      locations: ['', Validators.required],
      position: ['', Validators.required],
      attachment: [null],
      aboutMe: ['', Validators.required],
    });
  }
  get position() {
    return this.jobOfferForm.get('position');
  }

  get aboutMe() {
    return this.jobOfferForm.get('aboutMe');
  }

  get locations() {
    return this.jobOfferForm.get('locations');
  }

  compareJobOffer(firstObject: any, secondObject: any): boolean {
    return compareWith(firstObject, secondObject);
  }

  onSubmit(data: CandidateRequest) {
    this.store
      .dispatch(new AddCandidate(data, this.jobOfferId))
      .pipe(mergeMap(() => combineLatest([this.candidate$, this.jobOffer$])))
      .subscribe(([candidate, jobOffer]) => {
        this.notificationService.notify(
          `${candidate.firstName}, aplikowałeś na ofertę ${jobOffer.position}`
        );
        this.router.navigate(['/']);
      });
  }

  uploadFile(event: any) {
    const element = event.target as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.jobOfferForm.patchValue({
        attachment: fileList[0],
      });
      this.jobOfferForm.get('attachment').updateValueAndValidity();
    }
  }
}
