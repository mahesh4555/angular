import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs'
import {tap, catchError } from 'rxjs/operators'
import {Todo} from './store/models/todo.model'
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  url : string = "http://localhost:4000/todo/"

  getData(): Observable<Todo[]>{
    console.log("In todo service getData")
    return this.http.get<Todo[]>(this.url+"getData",{responseType: 'json'})
    .pipe(
      tap( // Log the result or error
        data => console.log("In todo service :",data),
       
      ),
      //  catchError(this.handleError(e))
    );

  }


  addData(data : Todo): Observable<Todo[]>{
    console.log("In todo service postData")
    return this.http.post<Todo[]>(this.url+"addData",data,{responseType: 'json'})
    .pipe(
      tap( // Log the result or error
        data => console.log("In todo service :",data),
       
      ),
      //  catchError(this.handleError(e))
    );

  }

  

  updateState(data ): Observable<Todo[]>{
    console.log("In todo service updateData")
    return this.http.patch<Todo[]>(this.url + 'updateState/'+ data._id ,data ,{responseType: 'json',}, )
    .pipe(
      tap( // Log the result or error
        data => console.log("In todo  service update :",data),
       
      ),
      //  catchError(this.handleError(e))
    );

  }


  handleError(){
    console.log("err")
      
  }

}
