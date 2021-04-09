import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FakeComponent } from './fake/fake.component';
import { FakeService } from './service.fake';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FakeService],   // register all service class details 
  bootstrap: [AppComponent]
})
export class AppModule { }
