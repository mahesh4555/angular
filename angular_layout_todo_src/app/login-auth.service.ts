import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {tap, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {  Store } from '@ngrx/store';

import {AppState} from './store/reducers/todo.reducer'
import {ADD_TODO, CHANGE_LOGIN_STATUS} from './store/actions/todo.actions'
import { SocialAuthService } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private http: HttpClient, private store : Store<{todo:AppState}>,
    private authService: SocialAuthService ) { }
 
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
        .pipe(
          catchError(this.handleError)
        );
      

  }


  handleError(error : HttpErrorResponse){
    console.log("Error :",error);
    return Observable.throwError(error.message || "server error")
  }


  logout(){
    console.log("logout in login-auth service")


    this.authService.authState.subscribe((user) => {
      console.log("social logout in login-auth service")
      console.log(user)
      if (user != null)
         this.authService.signOut();
    });
   
    let payload : boolean = false;
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.store.dispatch(
    new CHANGE_LOGIN_STATUS(payload)   //type is mentioned in product.action.ts
     );

     console.log("logged out ")

  }






}
