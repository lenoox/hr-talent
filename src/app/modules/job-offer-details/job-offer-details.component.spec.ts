import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferDetailsComponent } from './job-offer-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule, Store } from '@ngxs/store';
import { JobOfferState } from '../../core/state/job-offer/job-offer.state';
import { CandidateState } from '../../core/state/candidate/candidate.state';
import { DirectoryState } from '../../core/state/directory/directory.state';
import { JobOfferApplyComponent } from '../job-offer-apply/job-offer-apply.component';
import { JobOfferService } from '../../core/services/job-offer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetJobOffer } from '../../core/state/job-offer/job-offer.action';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('JobOfferDetailsComponent', () => {
  let component: JobOfferDetailsComponent;
  let fixture: ComponentFixture<JobOfferDetailsComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOfferDetailsComponent],
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([JobOfferState]),
        HttpClientTestingModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(JobOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should select zoo', () => {
    store
      .selectOnce(state => state.jobOffer)
      .subscribe(zoo => {
        // Note: this expectation will not be run!
        expect(zoo).toBeTruthy();
      });

    const zoo = store.selectSnapshot(state => state.jobOffer);
    expect(zoo).toBeTruthy();
  });
});
