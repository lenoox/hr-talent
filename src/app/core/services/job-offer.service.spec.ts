import { TestBed } from '@angular/core/testing';

import { JobOfferService } from './job-offer.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const MODULES = [HttpClientTestingModule];

describe('JobOfferService', () => {
  let service: JobOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...MODULES],
    });
    service = TestBed.inject(JobOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
