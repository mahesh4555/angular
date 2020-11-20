import { Todo } from '../models/todo.model';
import {ActionParent} from '../actions/todo.actions';
import { TodoActionTypes } from '../shared/todo-action-types.enum';

// //actions
// export const ADD_PRODUCT = 'ADD_PRODUCT';
// export const DELETE_PRODUCT = 'DELETE_PRODUCT';
// export const ADD_PRODUCT1 = 'ADD_PRODUCT1';
// export const DELETE_PRODUCT1 = 'DELETE_PRODUCT1';
// export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';



export interface AppState {
    todosData  : Todo[],
    activeState : number,

}

//state

 const initialState : AppState   = {

    todosData: [    {   "_id": "ssss",
                        "currentState": 2,
                        "name": "",
                        "content": "1"
                        },
               ],
    activeState : 1
  
}

// let UPDATE_PRODUCT ='UPDATE_PRODUCT';

//reducer
export const TodoReducer = (state = initialState, action:ActionParent) =>{
 
    console.log(action.type)
    console.log(action.payload)

  switch (action.type) {
    case  TodoActionTypes.ADD_TODO:
        // return [...state, action.payload];
        console.log(state.todosData)
        return  { ...state, todosData:[...state.todosData,   action.payload] }
    
    case  TodoActionTypes.ADD_ALL_TODO:
            // return [...state, action.payload];
            console.log(state.todosData)
            return  {...state,  todosData:  action.payload }

   case  TodoActionTypes.CHANGE_STATE:
                // return [...state, action.payload];
        console.log(state.activeState)
        return  {...state,  activeState:  action.payload }
        
            // case  TodoActionTypes.ADD_ALL_TODO:
            //     // return [...state, action.payload];
            //     console.log(state.todosData)
            //     return  { todosData: [...state.todosData, action.payload.map(todos =>{
            //         return todos})]}
            
    
    // case  TodoActionTypes.DELETE_TODO:
    //     // return [...state, action.payload];
    //     console.log(state.todosData)
    //     return  { ...state,  todosData:[...state.todosData.filter(todosData=> todosData.name != action.payload)] }
       

        
      

    case TodoActionTypes.UPDATE_TODO:
            // return [...state, action.payload];
            console.log(state.todosData)
            return  { ...state,  todosData:[...state.todosData.map(todosData=>{
                if(todosData._id == action.payload._id){
                    return Object.assign({}, todosData, action.payload);
                    // product.name = action.payload.update_name
                }
    
                return todosData
            } )] }
        
    default:
        return state;
    }
}