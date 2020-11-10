import {Action} from '@ngrx/store'
import {ProductActionTypes} from '../shared/product-action-types.enum'

export class ActionParent implements Action {
    type: any;
    payload : any;
    
}


export class ADD_PRODUCT implements ActionParent {
    type= ProductActionTypes.ADD_PRODUCT;
    // payload: any;
    constructor(public payload : any) {}
}

export class DELETE_PRODUCT implements ActionParent {
    type= ProductActionTypes.DELETE_PRODUCT;
    // payload: any;
    constructor(public payload : any) {}
}

export class ADD_MESSAGE implements ActionParent {
    type= ProductActionTypes.ADD_MESSAGE;
    // payload: any;
    constructor(public payload : any) {}
}

export class UPDATE_PRODUCT implements ActionParent {
    type= ProductActionTypes.UPDATE_PRODUCT;
    // payload: any;
    constructor(public payload : any) {}
}