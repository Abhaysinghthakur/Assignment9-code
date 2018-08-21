import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [SharedComponent],
  exports:[SharedComponent]

})
export class SharedModule { }
