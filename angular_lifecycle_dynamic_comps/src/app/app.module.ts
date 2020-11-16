import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {StoreModule}  from '@ngrx/store';
import { addProductReducer } from './store/reducers/product.reducer';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { HiComponent } from './hi/hi.component';
import { HelloComponent } from './hello/hello.component';
import {HostDirective} from './host.directive'
// import { addProductReducer1 } from './store/product.reducer';
//  import {initialState} from './store/product.reducer'

//  import { NgRedux, NgReduxModule } from '@angular-redux/store';
import {AppendPipe} from './custom.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    HiComponent,
    HelloComponent,
    HostDirective,
    AppendPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({product:addProductReducer})
  ],
  entryComponents:[HiComponent,HelloComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
