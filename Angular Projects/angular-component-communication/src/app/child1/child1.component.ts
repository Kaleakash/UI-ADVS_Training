import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input()
  pName?:string;  // pName variable become eligible to recieve the value from parent component
  
  age?:number;
  
  @Output()
  eventRef = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  sendAge(age:any){
    this.age = age;
    this.eventRef.emit(age);  // ready to pass the value. 
  }

}
