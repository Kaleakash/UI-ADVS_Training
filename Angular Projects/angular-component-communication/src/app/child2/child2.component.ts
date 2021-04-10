import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input()
  productDetails?:Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
