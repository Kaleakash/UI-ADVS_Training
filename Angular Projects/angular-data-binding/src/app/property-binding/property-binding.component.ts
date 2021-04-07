import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  name:string="Ajay Kumar";
  age:number = 21;
  constructor() { }

  ngOnInit(): void {
  }
  sayHello() :string{
    return "Welcome to Propety binding";
  }
}
