import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName?:string;
  products:Array<string>=[];
  
  childAge?:number;
  
  @ViewChild(Child2Component)   // inject the reference of child2 component
  child2?:Child2Component;

  childDesg?:string;

  displayName(name:any){
    this.parentName=name;
  }
  addProduct(product:string){
    this.products.push(product);
  }

  fun(event:any){
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
  }

  callChild2Fun() {
    this.child2?.child2Fun();
    this.childDesg=this.child2?.desg;
  }
}
