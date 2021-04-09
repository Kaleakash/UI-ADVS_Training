import { Component, OnInit } from '@angular/core';
import { Fake } from '../model.fake';
import { FakeService } from '../service.fake';
@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  msg1?:string;
  fakeData?:Array<Fake>;
  f1:boolean = false;
  constructor(public fakeSer:FakeService) { }  //DI : Pull the object from container
  ngOnInit(): void {
  }
  fun1() {
    this.msg1 = this.fakeSer.sayHello();
  }
  callFake() {
    this.fakeSer.callFakeService();
  }
  loadInTable() {
    this.f1 = true;
    this.fakeSer.displayFakeInTableFormat().subscribe(data=>this.fakeData=data);
  }
}
