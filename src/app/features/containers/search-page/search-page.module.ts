import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [ 
    CommonModule, 
    IonicModule
  ],
  declarations: [SearchPageComponent],
  exports: [SearchPageComponent]
})
export class SearchPageModule {}