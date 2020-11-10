import { Component } from '@angular/core';
import {select, Store } from '@ngrx/store';
import {AppState} from './store/reducers/product.reducer'
// import {initialState} from './store/product.reducer'
import {Observable} from 'rxjs'

import {Product} from './store/product.model'

import {ADD_PRODUCT,ADD_MESSAGE, DELETE_PRODUCT, UPDATE_PRODUCT} from './store/actions/product.action'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'loginapp';

  products: Product[];
  loading : boolean;
  message: Array<string>;
  loginstatus : boolean;
  all : AppState;

  // Store<AppState > can also be used. but cant use select('product')
  //Instead, only subscribe(state) can be defined. from that state['product] can be fetched

  constructor(private store: Store <{product:AppState}>) { //'product' -> name defined in StoreModule.forRoot()

     this.store.pipe(select('product')).subscribe(state => {  //'product' -> name defined in StoreModule.forRoot()
       console.log(" inside")
       console.log("State:",state)
  
       this.all = state
      this.loading = state['loading'],
      this.message = state['message'],
      this.loginstatus = state['loginstatus'],
      this.products = state['products'],

      console.log("All:",this.all)

    
    });
    console.log(" constructor outside")
   
  }

  addProduct(name : string, price:string) {

    console.log("addProduct")
    console.log(name,price)

    let payload : Product = {
      name: name,
      price: price
    }
    this.store.dispatch(
      new ADD_PRODUCT(payload)   //type is mentioned in product.action.ts
    
    );
  }


  addProduct1(name:string, price:string) {

    console.log("addProduct")
    console.log(name,price)

    this.store.dispatch({
      type: 'ADD_PRODUCT1' ,
      payload: {
        name: "name",
        price: "price"
      }
    });
  }


  addMessage() {
    // event.preventDefault()
    console.log("ADD_MESSAGE")

   let payload : Object = {
      message: "Hello deleteProduct"
    }
    this.store.dispatch(
      new ADD_MESSAGE(payload)
    );
  
  }


  
  deleteProduct(item_name: string) {
    // event.preventDefault()
    console.log("deleteProduct")
    // console.log(this.message)
    // console.log(this.products)
    let payload : string =  item_name 
    
    this.store.dispatch(
      new DELETE_PRODUCT(payload)
    );
  
  }


  updateProduct(item_name : string) {
    // event.preventDefault()
    console.log("deleteProduct")
    // console.log(this.message)
    // console.log(this.products)
    let payload : Object = {
      
      name:item_name,
      update_name : "changed"
    }
    
    this.store.dispatch(
      new UPDATE_PRODUCT(payload)
    );
  
  }


  listProducts(){
    console.log("state")
    console.log(this.loading)
    console.log(this.loginstatus)
    console.log(this.message)
    console.log(this.products)
  }

}


/*
Finally, at the end of the file we define meta-reducers. 
These are hooks that enable you to pre-process actions or add middleware. 
You could define them to look for actions like INIT or UPDATE, 
which are the default actions that NgRx does when the application starts up or 
when the store changes respectively. Meta-reducers are also a great way to handle localStorage. 
I haven’t defined any for this application because it is very simple, but they can be very powerful and 
I recommend checking out Alex Okrushko’s post on ways to improve using NgRx here.
*/