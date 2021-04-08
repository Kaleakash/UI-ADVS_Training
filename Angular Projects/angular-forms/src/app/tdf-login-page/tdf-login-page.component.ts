import { Component, OnInit } from '@angular/core';

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
    console.log(loginRef)
    if(loginRef.user=="Raj" && loginRef.pass=="Kumar"){
        this.msg = "Successfully Login!"
    }else {
      this.msg = "Failure try once again";
    }
  }
  fun(hobbies:any) {
    console.log("event fired"+hobbies)
  }
}
