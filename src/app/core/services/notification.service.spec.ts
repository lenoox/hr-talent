import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBar,
  MatSnackBarModule,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const MODULES = [MatSnackBarModule, HttpClientTestingModule];

describe('NotificationService', () => {
  let service: NotificationService;
  const mockSnackbarMock = jasmine.createSpyObj(['open']);
  mockSnackbarMock.open;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...MODULES],
      providers: [{ provide: MatSnackBar, useValue: mockSnackbarMock }],
    }).compileComponents();
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('should open the snack bar with correct arguments when form submitted', () => {
  //   //emulate submission
  //
  //   expect(mockSnackbarMock.open).toHaveBeenCalledWith(
  //     'Submitted Successfully',
  //     'OK',
  //     {
  //       horizontalPosition: 'center',
  //       verticalPosition: 'top',
  //     }
  //   );
  // });
});
