import { TestBed } from '@angular/core/testing';

import { CandidateService } from './candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const MODULES = [HttpClientTestingModule];

describe('CandidateService', () => {
  let service: CandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...MODULES],
    });
    service = TestBed.inject(CandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
