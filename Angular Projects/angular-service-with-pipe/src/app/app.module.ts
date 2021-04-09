import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FakeComponent } from './fake/fake.component';
import { FakeService } from './service.fake';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FakeComponent,
    EmployeeComponent,GenderPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [FakeService],   // register all service class details 
  bootstrap: [AppComponent]
})
export class AppModule { }
