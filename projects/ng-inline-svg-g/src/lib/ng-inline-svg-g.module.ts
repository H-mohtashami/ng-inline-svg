import { NgModule } from '@angular/core';
import { NgInlineSvgGComponent } from './ng-inline-svg-g.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    NgInlineSvgGComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NgInlineSvgGComponent
  ]
})
export class NgInlineSvgGModule { }
