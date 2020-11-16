import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor() { }

 
  num2 : number = 20;
    getDS2(n){
      console.log("getData in service2")
     return this.num2 + n
    }

}
