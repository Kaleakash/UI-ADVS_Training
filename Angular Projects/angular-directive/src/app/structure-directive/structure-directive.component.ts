import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  flag:boolean = false;
  b1:string="show";
  flag1:boolean = false;
  stdName:Array<string>=["Raj","Ramesh","Lokesh","Mahesh","Rajesh"];
  employees:Array<Employee>=new Array();
  constructor() {
    let emp1 = new Employee(100,"Ramesh",12000);
    let emp2 = new Employee(101,"Rajesh",15000);
    let emp3 = new Employee(102,"Lokesh",18000);
    let emp4 = new Employee(103,"Mahesh",20000);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
    this.employees.push(emp4);
   }

  ngOnInit(): void {
  }

  display() {
    if(this.b1 == "show"){
      this.flag = true;
      this.b1 = "hide";
    }else {
      this.flag = false;
      this.b1 = "show";
    }
  }

  fun() {
    this.flag1=true;
  }
}
