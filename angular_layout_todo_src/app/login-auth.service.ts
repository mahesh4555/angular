import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {tap, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private http: HttpClient) { }
 
  url : string = "http://localhost:4000/"

  login_post_api(data : Object): Observable<any>{
    console.log("In todo service login_post_api");
    return this.http.post<any>(this.url+"api/auth/login",data,{responseType: 'json'})
      .pipe(
        catchError(this.handleError)
      );

  }


  login_post_google_api(data : Object): Observable<any>{
    console.log("In todo service login_post_google_api");
    return this.http.post<any>(this.url+"api/auth/google_login",data,{responseType: 'json'})
   
      //  catchError(this.handleError(e))
  

  }


  handleError(error : HttpErrorResponse){
    console.log("Error :",error);
    return Observable.throwError(error.message || "server error")
  }




}
