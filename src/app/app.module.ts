import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesModule } from './modules/modules.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobOfferState } from './core/state/job-offer/job-offer.state';
import { DirectoryState } from './core/state/directory/directory.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { SharedModule } from './shared/shared.module';
import { CandidateState } from './core/state/candidate/candidate.state';

const STATES = [JobOfferState, CandidateState, DirectoryState];
const COMPONENTS = [AppComponent];
const MODULES = [
  BrowserModule,
  AppRoutingModule,
  ModulesModule,
  CoreModule,
  BrowserAnimationsModule,
  NgxsModule.forRoot([...STATES]),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsLoggerPluginModule.forRoot(),
  SharedModule,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  bootstrap: [...COMPONENTS],
})
export class AppModule {}
