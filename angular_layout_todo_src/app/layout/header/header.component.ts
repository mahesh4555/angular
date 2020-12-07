import { Component, OnInit } from '@angular/core';
import {select, Store } from '@ngrx/store';
import {AppState} from '../../store/reducers/todo.reducer'
import {ADD_TODO, CHANGE_LOGIN_STATUS} from '../../store/actions/todo.actions'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {  CookieService } from 'ngx-cookie-service';  

import { SocialAuthService } from "angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedInStatus: boolean = false;
  public url : string = "http://localhost:4000/"

  constructor(private store : Store<{todo:AppState}>, private http:HttpClient, 
    private cookieService: CookieService,  private authService: SocialAuthService) { 

    this.store.pipe(select('todo')).subscribe(state => {  //'product' -> name defined in StoreModule.forRoot()
    console.log("constructor inside header")
    console.log("State:",state)

    this.loggedInStatus = state['isLoggedIn']
    console.log("loggedInStatus:",this.loggedInStatus)

 });

  }

  ngOnInit(): void {
    var responseToken = localStorage.getItem('token')
    var userMail = localStorage.getItem('username')

    var sresponseToken = sessionStorage.getItem('token')
    var suserMail = sessionStorage.getItem('username')
    console.log("responseToken:",responseToken)
    console.log(userMail)
    console.log("sresponseToken:",sresponseToken)
    console.log(suserMail)

     if(responseToken)
     {
   
      console.log(" ngOnInit Content responseToken true")
      this.http.get<any>(this.url+"api/auth/me",{ headers: {
        Authorization: "Bearer " +  responseToken }, 
            responseType: 'json' }).subscribe(response =>{ 

              console.log("Http response :",response)

              console.log("response un3me :",response.username)
              if(response.email == userMail){

                console.log( " ngOnInit Content TRUE")
                let payload : boolean = true;
                this.store.dispatch(
                  new CHANGE_LOGIN_STATUS(payload)
                  )
              }
    })
     
    }

  }

   
  logout(){
    this.authService.signOut();
    let payload : boolean = false;
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.store.dispatch(
    new CHANGE_LOGIN_STATUS(payload)   //type is mentioned in product.action.ts
  
  );
 
  console.log("logout")
  console.log(this.cookieService.get('username'));  
  console.log(this.cookieService.get('password'));  

  }
}
