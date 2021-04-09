import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./model.employee";

@Injectable()
export class EmployeeService {
    constructor(public http:HttpClient){}

    storeEmployee(empRef:any){
        this.http.post("http://localhost:3000/employees",empRef).
        subscribe(data=>console.log(data));
    }

    retreiveEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:3000/employees")
    }
}