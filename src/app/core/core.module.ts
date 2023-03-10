import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JobOfferService } from './services/job-offer.service';
import { DirectoryService } from './services/directory.service';
import { NotificationService } from './services/notification.service';

const MODULES = [CommonModule, HttpClientModule];
const SERVICES = [JobOfferService, DirectoryService, NotificationService];
@NgModule({
  imports: [...MODULES],
  providers: [...SERVICES],
})
export class CoreModule {}
