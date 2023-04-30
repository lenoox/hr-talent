import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferApplyComponent } from './job-offer-apply.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { JobOfferState } from '../../core/state/job-offer/job-offer.state';
import { CandidateState } from '../../core/state/candidate/candidate.state';
import { DirectoryState } from '../../core/state/directory/directory.state';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NotificationService } from '../../core/services/notification.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('JobOfferApplyComponent', () => {
  let component: JobOfferApplyComponent;
  let fixture: ComponentFixture<JobOfferApplyComponent>;
  let notificationService: NotificationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        MatSnackBarModule,
        NgxsModule.forRoot([JobOfferState, CandidateState, DirectoryState]),
      ],
      providers: [NotificationService, MatSnackBar],
      declarations: [JobOfferApplyComponent],
    }).compileComponents();
    notificationService = TestBed.inject(NotificationService);
    fixture = TestBed.createComponent(JobOfferApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
