import { TestBed } from '@angular/core/testing';

import { DirectoryService } from './directory.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const MODULES = [HttpClientTestingModule];

describe('DirectoryService', () => {
  let service: DirectoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...MODULES],
    });
    service = TestBed.inject(DirectoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
