import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service.employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }
  storeRec(empRef:any){
    //console.log(empRef);
    this.empSer.storeEmployee(empRef);
  }

}
