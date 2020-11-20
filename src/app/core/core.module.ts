import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app/app.component';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from '../material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';

export const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  ContactFormComponent,
  ContactListComponent
];



@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
