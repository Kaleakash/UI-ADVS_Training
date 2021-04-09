import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service.login';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
loginRef = new FormGroup({
  user:new FormControl("",[Validators.required]),
  pass:new FormControl("",[Validators.required])
});
msg?:string;
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(){
    //console.log("Event Fired...")
    //console.log(this.loginRef.value)
    let user = this.loginRef.get("user")?.value;
    let pass= this.loginRef.get("pass")?.value;
    let ls = new LoginService();
    this.msg = ls.checkUser(user,pass);
    
    //let user1 = this.loginRef.controls.user?.value;
    //console.log("User is "+user);
    //console.log("Pass is "+pass)
    //console.log(user1)
    //if(user=="Ajay" && pass=="123"){
    //  this.msg = "Successfully Login"
    //}else {
    //  this.msg = "Failure try once again"
    //}
  }
}
