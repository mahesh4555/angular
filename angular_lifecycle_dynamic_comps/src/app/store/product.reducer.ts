// import { Product } from './product.model';
// import {ActionReducer, Action, State} from '@ngrx/store';
// import { logging } from 'protractor';

// //actions
// export const ADD_PRODUCT = 'ADD_PRODUCT';
// export const DELETE_PRODUCT = 'DELETE_PRODUCT';
// export const ADD_PRODUCT1 = 'ADD_PRODUCT1';
// export const DELETE_PRODUCT1 = 'DELETE_PRODUCT1';
// export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';



// export interface AppState {
//     products:Product[ ],
//     loginstatus : boolean,
//     loading : boolean,
//     message : Array<string>
// }

// //state

//  const initialState : AppState   = {
    

//     products: [{"name": "name",
//     "price": "price"},
//     {"name": "mahe",
//     "price": "boop"},],
//     loginstatus : false,
//     loading : true,
//     message : ["Guest"]
// }



// //reducer
// export const addProductReducer = (state = initialState, action:any) =>{
//     console.log(action.type)
//     console.log(action.payload)
//   switch (action.type) {
//     case ADD_PRODUCT:
//         // return [...state, action.payload];
//         console.log(state.products)
//         return  { ...state, products:[...state.products,   action.payload] }
//     case DELETE_PRODUCT:
//         console.log(state)
//         // return [...initialState, action.payload.message]
//         return { ...state, message :[...state.message,   action.payload.message ]  }
//         return
//     default:
//         return initialState;
//     }
// }





// export function addProductReducer1(state = initialState , action) {
//     console.log(action.type)
//     console.log(action.payload)
//   switch (action.type) {
//     case ADD_PRODUCT1:
//         // return [...state, action.payload];
//         return { ...initialState, products:[...initialState.products,   action.payload] }
//     case DELETE_PRODUCT1:
//         return { ...initialState, name : action.payload.message }
//     default:
//         return initialState;
//     }
// }