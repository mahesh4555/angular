import { Injectable } from '@angular/core';
import {Service2Service} from './service2.service'
@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private serv2 : Service2Service) { }

  num1 : number = 20;
    getDS1(n: number){
      console.log("getData in service1")
      return this.serv2.getDS2(n)
      console.log(this.num1)
      return this.num1
    }

}
