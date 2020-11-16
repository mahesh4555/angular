import { Product } from '../models/product.model';
import {ActionParent} from '../actions/product.action';
import { ProductActionTypes } from '../shared/product-action-types.enum';

// //actions
// export const ADD_PRODUCT = 'ADD_PRODUCT';
// export const DELETE_PRODUCT = 'DELETE_PRODUCT';
// export const ADD_PRODUCT1 = 'ADD_PRODUCT1';
// export const DELETE_PRODUCT1 = 'DELETE_PRODUCT1';
// export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';



export interface AppState {
    products:Product[ ],
    loginstatus : boolean,
    loading : boolean,
    message : Array<string>
}

//state

 const initialState : AppState   = {
    

    products: [{"name": "name",
    "price": "price"},
    {"name": "mahe",
    "price": "boop"},],
    loginstatus : false,
    loading : true,
    message : ["Guest"]
}

// let UPDATE_PRODUCT ='UPDATE_PRODUCT';

//reducer
export const addProductReducer = (state = initialState, action:ActionParent) =>{
 
    console.log(action.type)
    console.log(action.payload)

  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
        // return [...state, action.payload];
        console.log(state.products)
        return  { ...state, products:[...state.products,   action.payload] }
    
    case ProductActionTypes.ADD_MESSAGE:
        // return [...state, action.payload];
        console.log(state.products)
        return  { ...state, message:[...state.message,   action.payload.message] }
    
    case ProductActionTypes.DELETE_PRODUCT:
        // return [...state, action.payload];
        console.log(state.products)
        return  { ...state,  products:[...state.products.filter(product=> product.name != action.payload)] }
        //      return state.filter(todo => todo.id !== action.payload.id);
        //return state.map(todo => {
    // if (todo.id === action.payload.id) {
    //     return Object.assign({}, todo, {
    //       complete: !todo.complete
    //     });
    //   }

    case ProductActionTypes.UPDATE_PRODUCT:
        // return [...state, action.payload];
        console.log(state.products)
        return  { ...state,  products:[...state.products.map(product=>{
            if(product.name == action.payload.name){
                return Object.assign({}, product, {
                    name : action.payload.update_name
                        });
                // product.name = action.payload.update_name
            }

            return product
        } )] }
        
    default:
        return state;
    }
}



