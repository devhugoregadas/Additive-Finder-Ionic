import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { TabBarComponent } from './shared/components/tab-bar/tab-bar.component';
import { Page1Component } from './features/containers/page1/page1/page1.component';
import { Page2Component } from './features/containers/page2/page2.component';
import { Page3Component } from './features/containers/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    TabBarComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
