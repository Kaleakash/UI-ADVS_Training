import { Injectable } from "@angular/core";

@Injectable()               // Angular service class. 
export class FakeService {
    sayHello():string {
        return "Welcome to Fake Service with DI";
    }
}