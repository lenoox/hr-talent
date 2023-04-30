import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersListComponent } from './job-offers-list.component';
import { NgxsModule } from '@ngxs/store';
import { JobOfferState } from '../../core/state/job-offer/job-offer.state';
import { HttpClientModule } from '@angular/common/http';

describe('JobOffersListComponent', () => {
  let component: JobOffersListComponent;
  let fixture: ComponentFixture<JobOffersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOffersListComponent],
      imports: [NgxsModule.forRoot([JobOfferState]), HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(JobOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
