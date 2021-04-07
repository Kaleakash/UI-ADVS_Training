import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }

  fun() {
    console.log("event generated");
    this.msg = "WElcome to Event binding coding...."
  }
  passValue(name:any){
    console.log(name);
  }

}

