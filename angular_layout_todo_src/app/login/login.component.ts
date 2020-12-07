import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service'
import {TodoTask} from '../todo-task'
import {select, Store } from '@ngrx/store';
import {AppState} from '../store/reducers/todo.reducer'
import {ADD_TODO, CHANGE_LOGIN_STATUS} from '../store/actions/todo.actions'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {LoginAuthService} from "../login-auth.service"
import { from } from 'rxjs';
import {  CookieService } from 'ngx-cookie-service';  
import {Router} from '@angular/router'
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loggedInStatus: boolean;
   public errorMsg: string;

   public cookieUsername: string;
   public cookiePassword: string;
   public url : string = "http://localhost:4000/"
  constructor(private store : Store<{todo:AppState}>, private login_api :LoginAuthService, 
    private http:HttpClient,  private cookieService: CookieService,
    private router : Router,
    private authService: SocialAuthService) { 
      
      console.log("constructor in login");  
      console.log(this.cookieService.get('username'));  
      console.log(this.cookieService.get('password'));  

      this.cookieUsername = this.cookieService.get('username');  
      this.cookiePassword = this.cookieService.get('password');

        
      this.store.pipe(select('todo')).subscribe(state => {  //'product' -> name defined in StoreModule.forRoot()
          console.log("constructor inside login")
          console.log("State:",state)

          this.loggedInStatus = state['isLoggedIn']
          console.log("loggedInStatus:",this.loggedInStatus)
      
       });
     
 
    

  }


 private user : Object;
 public socialLoggedIn : any;
  ngOnInit(): void {
    console.log("ngOnInt login");

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.socialLoggedIn = (user != null);

      console.log("USER :",this.user)
     
      console.log("socialLoggedIn :",this.socialLoggedIn)

      if(user){

        console.log("USER :",user['email'])
        console.log("USER :",user['idToken'])
      

      var  data = {"email":user['email'], token:user['idToken']}

      this.login_api.login_post_google_api(data).subscribe(
        data =>{
                 console.log("login response data :", data);
                var  login_response = data;
           


 
                 let payload : boolean = true;
                 this.store.dispatch(
                   new CHANGE_LOGIN_STATUS(payload)
                   )
 
                 this.router.navigate(['/todo'])
                 
                     
                 },
     
     error => {
       console.log("login error response data :", error);
       this.errorMsg=error;
      }
      
      
      );
    }
 
    
 
 
    });
    

  }

  ngOnChanges(){
    console.log("ngOnChanges login");
  }




  onSubmit(logincredentials:any){


   var login_data = { email : logincredentials['username'],
                      password : logincredentials['password']}

    console.log(login_data);


    var login_response:Object;

     this.login_api.login_post_api(login_data).subscribe(
       data =>{
                console.log("login response data :", data);
                login_response = data;
                this.errorMsg="";
                localStorage.setItem('token',login_response['token']);
                localStorage.setItem('username',login_data['email']);

                sessionStorage.setItem('token',login_response['token']);
                sessionStorage.setItem('username',login_data['email']);

                console.log(this.cookieService.get('username'));  
                console.log(this.cookieService.get('password'));  
                const dateNow = new Date();
                dateNow.setMinutes(dateNow.getMinutes() + 1);
                // this.cookieService.set('isLoggedIn', 'true', dateNow);
                console.log("remember-me :",logincredentials["remember-me"])
                if(logincredentials["remember-me"]){
                  this.cookieService.set('username-cookie-expiry', logincredentials['username'],dateNow);
                  this.cookieService.set('username', logincredentials['username']);  
                  this.cookieService.set('password', logincredentials['password']); 
                }
               
                // setTimeout(()=>{this.cookieService.deleteAll();},1000); 
                // this.cookieService.deleteAll();
                console.log(this.cookieService.get('username'));  
                console.log(this.cookieService.get('password'));  

                let payload : boolean = true;
                this.store.dispatch(
                  new CHANGE_LOGIN_STATUS(payload)
                  )

                this.router.navigate(['/todo'])
                
                    
                },
    
    error => {
      console.log("login error response data :", error);
      this.errorMsg=error;
     }
     
     
     );

   


    //  console.log("login response :",response)


     

  }
  
  logout(){
    this.signOut();
    let payload : boolean = false;
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.store.dispatch(
    new CHANGE_LOGIN_STATUS(payload)   //type is mentioned in product.action.ts
  
  );
 
  console.log("logout")
  console.log(this.cookieService.get('username'));  
  console.log(this.cookieService.get('password'));  
  console.log(this.cookieUsername)
  console.log(this.cookiePassword)
  this.cookieUsername = this.cookieService.get('username');  
  this.cookiePassword = this.cookieService.get('password');
  }




  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }


  
}
