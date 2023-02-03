import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from "@angular/common/http";
import {JobOfferService} from "./services/job-offer.service";
import {DirectoryService} from "./services/directory.service";
import {NotificationService} from "./services/notification.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    JobOfferService,
    DirectoryService,
    NotificationService,
  ]
})
export class CoreModule { }
