import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'      // register on module level. 
})
export class SharedService {

  constructor() { }

  names:Array<string>=[];

  setNames(name:string){
    this.names.push(name);
  }

  getNames():string[]{
    return this.names;
  }

}
