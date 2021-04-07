import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  id:number=100;
  name:string="Ajay Kumar";
  salary:number=12000;
  constructor() { }
  ngOnInit(): void {
  }
  sayHello() :string {
    return "Welcome to String interpolation one way data binding";
  }

}
