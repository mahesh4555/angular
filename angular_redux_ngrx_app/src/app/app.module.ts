import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {StoreModule}  from '@ngrx/store';
import { addProductReducer } from './store/reducers/product.reducer';
// import { addProductReducer1 } from './store/product.reducer';
//  import {initialState} from './store/product.reducer'

//  import { NgRedux, NgReduxModule } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({product:addProductReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
