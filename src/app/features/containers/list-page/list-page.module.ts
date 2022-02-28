import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListPageComponent],
  exports: [ListPageComponent]
})
export class ListPageModule { }
