import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { AngularMaterialModule } from '../angular-material.module';
import { RouterLink } from '@angular/router';
import { IsRoute } from './pipes/route.pipe';
import { IsArrayPipe } from './pipes/is-array.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobOfferHeaderComponent } from './components/job-offer-header/job-offer-header.component';
import { TextPreviewComponent } from './components/text-preview/text-preview.component';
import { QuillViewComponent } from 'ngx-quill';

const COMPONENTS = [
  TableComponent,
  NavbarComponent,
  TextPreviewComponent,
  JobOfferHeaderComponent,
];
const PIPES = [IsArrayPipe, IsRoute];
const MODULES = [
  CommonModule,
  AngularMaterialModule,
  RouterLink,
  QuillViewComponent,
];
@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
