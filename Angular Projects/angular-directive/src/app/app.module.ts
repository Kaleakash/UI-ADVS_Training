import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDirectiveComponent,
    StructureDirectiveComponent,
    AttributeDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
