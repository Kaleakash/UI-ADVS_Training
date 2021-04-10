import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg?:string;
  constructor(public router:Router,public loginService:LoginService) { } //do DI for Router API 
 ngOnInit(): void {
  }
  checkUser(logingRef:any){
    //console.log(logingRef);
    let user = logingRef.user;
    let pass = logingRef.pass;
    this.loginService.checkUser().subscribe(data=> {
        data.forEach(rec=>{
          if(rec.user==user && rec.pass==pass){
            sessionStorage.setItem("obj1",rec.user);  // sessionID or JWT
            this.router.navigate(["success",rec.user]); // 
            //append username through path.
          }else {
            this.errorMsg="Invalid UserName or password"; 
          }
        })
    });

    /*if(user=="Raj" && pass=="123"){
      this.router.navigate(["success"]);
        //console.log("Successfully Login")
    }else {
         //console.log("Failure try once again")
         this.errorMsg="Invalid UserName or password";
    }*/

  }
}
