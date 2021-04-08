import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chechbox-demo',
  templateUrl: './chechbox-demo.component.html',
  styleUrls: ['./chechbox-demo.component.css']
})
export class ChechboxDemoComponent implements OnInit {
  hobbies:Array<string>=["Reading","Writing","Playing"]
  hobbiesInfo:string="";
  constructor() { }

  ngOnInit(): void {
  }

  checkValue(event:any){
    console.log(event.target.checked)
    //console.log(event.target.value)
      this.hobbiesInfo=this.hobbiesInfo+" "+event.target.value;
  }
  showHobbies() {
    console.log(this.hobbiesInfo);
  }
}
