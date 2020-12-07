import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContentComponent } from './layout/content/content.component';
// import {DataService} from './data.service'
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import {HttpClientModule} from '@angular/common/http'
import {FlexLayoutModule} from '@angular/flex-layout';
import {TodoReducer} from './store/reducers/todo.reducer';
import {FormsModule} from '@angular/forms'

// import {MatCardModule} from '@angular/material/m'
import {MatButtonModule,} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {ScrollingModule} from '@angular/cdk/scrolling'
// import {

//   MatIconModule, MatInputModule,
//   MatAutocompleteModule, MatChipsModule,
//   MatFormFieldModule
import { CookieService } from 'ngx-cookie-service';

// } from '@angular/material';
import { TitleComponent } from './layout/title/title.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { LoginComponent } from './login/login.component';
import { LoggedOutScreenComponent } from './logged-out-screen/logged-out-screen.component';
import { EditTodoComponentComponent } from './edit-todo-component/edit-todo-component.component';

import {MatDialogModule} from '@angular/material/dialog';
// import { TitleComponent } from './title/title.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    MainlayoutComponent,
    TitleComponent,
    AddTodoComponent,
    LoginComponent,
    LoggedOutScreenComponent,
    EditTodoComponentComponent,

  ],

  entryComponents:[EditTodoComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatCardModule,
    StoreModule.forRoot({todo:TodoReducer}),
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollingModule,
    MatDialogModule,
    SocialLoginModule

  ],
  providers: [CookieService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '874607787308-r3vkocggamqukjvfeg1t3f13pc6c3abu.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('874607787308-r3vkocggamqukjvfeg1t3f13pc6c3abu.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
