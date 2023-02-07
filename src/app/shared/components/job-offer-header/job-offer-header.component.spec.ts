import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferHeaderComponent } from './job-offer-header.component';

describe('JobOfferHeaderComponent', () => {
  let component: JobOfferHeaderComponent;
  let fixture: ComponentFixture<JobOfferHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
