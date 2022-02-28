import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TabBarComponent } from './tab-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ 
    CommonModule, 
    IonicModule,
    RouterModule.forChild([{ 
      path: '', 
      component: TabBarComponent ,
      children: [
        {
          path: 'search-page', 
          loadChildren: () => import('../../../features/containers/search-page/search-page.module').then(n => n.SearchPageModule)
        },
        {
          path: 'list-page',
              loadChildren: () => import('../../../features/containers/list-page/list-page.module').then(n => n.ListPageModule)
        },
        {
          path: '', redirectTo: 'search-page', pathMatch: 'full'
        }
      ]
    }])
  ],
  declarations: [TabBarComponent],
  exports: [TabBarComponent]
})
export class TabBarModule { }
