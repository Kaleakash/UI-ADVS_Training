import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName?:string;
  products:Array<string>=[];
  
  childAge?:number;
  
  displayName(name:any){
    this.parentName=name;
  }
  addProduct(product:string){
    this.products.push(product);
  }
}
