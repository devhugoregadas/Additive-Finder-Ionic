import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tab-bar',
    loadChildren: () => import('../app/shared/components/tab-bar/tab-bar.module').then(n => n.TabBarModule)
  },
  {
    path: '',
    redirectTo: 'tab-bar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }