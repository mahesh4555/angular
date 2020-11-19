import { Component, OnInit } from '@angular/core';
import {select, Store } from '@ngrx/store';
import {AppState} from '../../store/reducers/todo.reducer'



import {Todo} from '../../store/models/todo.model'
import {TodoService} from '../../todo.service'

import {ADD_TODO, ADD_ALL_TODO,DELETE_TODO, UPDATE_TODO, CHANGE_STATE} from '../../store/actions/todo.actions'



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private store : Store<{todo:AppState}>) { }

  ngOnInit(): void {
  }


  
  changeState(activeState) {

    console.log("In changeState")
    console.log(activeState)

    let payload : number = activeState
    this.store.dispatch(
      new CHANGE_STATE(payload)   //type is mentioned in product.action.ts
    
    );

    // setInterval({console.log("cd")},3000)
  }

}
