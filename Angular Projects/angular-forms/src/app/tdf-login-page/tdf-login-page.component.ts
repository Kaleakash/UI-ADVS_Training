import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service.login';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  msg?:string;
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any){
    //console.log("Event generated");
    /*console.log(loginRef)
    if(loginRef.user=="Raj" && loginRef.pass=="Kumar"){
        this.msg = "Successfully Login!"
    }else {
      this.msg = "Failure try once again";
    }*/
    let ls = new LoginService();
    this.msg = ls.checkUser(loginRef.user,loginRef.pass);
  }
  fun(hobbies:any) {
    console.log("event fired"+hobbies)
  }
}
