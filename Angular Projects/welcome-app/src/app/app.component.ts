import { Component } from '@angular/core';

@Component({
  selector: 'abc',   //user-defined tag <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="Ajay Kumar";
}
