import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  userName?:string;
  //ActivatedRouter help to retreive the param value from router. 
  constructor(public activateRouter:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    //this.activateRouter.params.subscribe(data=>console.log(data));
    this.activateRouter.params.subscribe(data=>this.userName=data.user);
  }

  logout() {
    sessionStorage.removeItem("obj1");
    this.router.navigate(["login"]);
  }
  
}
