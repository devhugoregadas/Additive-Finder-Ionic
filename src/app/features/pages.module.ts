import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageModule } from './containers/list-page/list-page.module';
import { SearchPageModule } from './containers/search-page/search-page.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ],
  providers: [
    ListPageModule,
    SearchPageModule
  ]
})
export class PagesModule { }
