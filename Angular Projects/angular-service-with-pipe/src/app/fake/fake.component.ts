import { Component, OnInit } from '@angular/core';
import { FakeService } from '../service.fake';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  msg1?:string;
  constructor(public fake:FakeService) { }  //DI : Pull the object from container

  ngOnInit(): void {
  }

  fun1() {
    this.msg1 = this.fake.sayHello();
  }
}
