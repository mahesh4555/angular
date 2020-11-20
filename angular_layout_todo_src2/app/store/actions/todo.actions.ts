import {Action} from '@ngrx/store'
import {TodoActionTypes} from '../shared/todo-action-types.enum'

export class ActionParent implements Action {
    type: any;
    payload : any;
    
}


export class ADD_TODO implements ActionParent {
    type= TodoActionTypes.ADD_TODO;
    // payload: any;
    constructor(public payload : any) {}
}

export class ADD_ALL_TODO implements ActionParent {
    type= TodoActionTypes.ADD_ALL_TODO;
    // payload: any;
    constructor(public payload : any) {}
}

export class DELETE_TODO implements ActionParent {
    type= TodoActionTypes.DELETE_TODO;
    // payload: any;
    constructor(public payload : any) {}
}



export class UPDATE_TODO implements ActionParent {
    type= TodoActionTypes.UPDATE_TODO;
    // payload: any;
    constructor(public payload : any) {}
}


export class CHANGE_STATE implements ActionParent {
    type= TodoActionTypes.CHANGE_STATE;
    // payload: any;
    constructor(public payload : any) {}
}