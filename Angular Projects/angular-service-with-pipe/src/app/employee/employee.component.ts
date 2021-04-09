import { Component, OnInit } from '@angular/core';
import { Employee } from '../model.employee';
import { EmployeeService } from '../service.employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  employees?:Array<Employee>
  dd:Date= new Date();
  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {    // call only once
    this.empSer.retreiveEmployee().subscribe(data=>this.employees=data);
  }
  storeRec(empRef:any){
    //console.log(empRef);
    this.empSer.storeEmployee(empRef);
    this.empSer.retreiveEmployee().subscribe(data=>this.employees=data);
  }

}
