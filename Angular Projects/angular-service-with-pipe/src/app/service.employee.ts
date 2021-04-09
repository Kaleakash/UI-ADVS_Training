import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService {
    constructor(public http:HttpClient){}

    storeEmployee(empRef:any){
        this.http.post("http://localhost:3000/employees",empRef).subscribe(data=>console.log(data));
    }
}