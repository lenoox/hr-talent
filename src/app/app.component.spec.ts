import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgxsModule, Store } from '@ngxs/store';
import { JobOfferState } from './core/state/job-offer/job-offer.state';
import { CandidateState } from './core/state/candidate/candidate.state';
import { DirectoryState } from './core/state/directory/directory.state';
import { of } from 'rxjs';
const STATES = [JobOfferState, CandidateState, DirectoryState];
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxsModule.forRoot([])],
      declarations: [AppComponent],
    }).compileComponents();
    const store: Store = TestBed.inject(Store);
    spyOn(store, 'select').and.returnValue(of(null)); // be sure to mock the implementation here
    spyOn(store, 'selectSnapshot').and.returnValue(null); // same here
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
