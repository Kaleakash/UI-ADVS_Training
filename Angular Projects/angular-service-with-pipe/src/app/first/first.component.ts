import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../service.common';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg1?:string;
  constructor() { }

  ngOnInit(): void {
  }
  fun1() {
    let ser1 = new MyCustomService();
    this.msg1 = ser1.sayHello();
  }
}
