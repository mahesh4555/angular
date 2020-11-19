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
import { TitleComponent } from './layout/title/title.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
// import { TitleComponent } from './title/title.component';
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
    
  ],
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
