import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../service.common';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  msg1?:string;
  constructor() { }

  ngOnInit(): void {
  }

  fun1() {
    let ser1 = new MyCustomService();
    this.msg1 = ser1.sayHello();
  }
}
