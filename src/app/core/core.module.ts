import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app/app.component';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from '../material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';

export const COMPONENTS = [
  AppComponent,
  HeaderComponent
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
