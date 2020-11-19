import { Component, OnInit } from '@angular/core';

import {select, Store } from '@ngrx/store';
import {AppState} from '../../store/reducers/todo.reducer'

import {Observable} from 'rxjs'

import {Todo} from '../../store/models/todo.model'
import {TodoService} from '../../todo.service'

import {ADD_TODO, ADD_ALL_TODO,DELETE_TODO, UPDATE_TODO} from '../../store/actions/todo.actions'



@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent implements OnInit {

  todoData: Todo []

  constructor(private store : Store<{todo:AppState}>, private todoService : TodoService) {

    console.log("In main layout, call getdata")
    this.todoService.getData().subscribe(data =>{
        console.log("In main layout, Fetched data :", data);
        this.todoData = data;

        console.log("mainlayout todoData fetched:", this.todoData)

        this.addTodo(data)
    })

    this.store.pipe(select('todo')).subscribe(state => {  //'product' -> name defined in StoreModule.forRoot()
        console.log("constructor inside")
        console.log("State:",state)

        this.todoData = state['todosData']
        console.log("All:",this.todoData)

 
     });


    console.log(" constructor outside")


   }

  ngOnInit(): void {
  }


  addTodo(todoData) {

    console.log("In addTodo")
    console.log(todoData)

    let payload : any = todoData
    this.store.dispatch(
      new ADD_ALL_TODO(payload)   //type is mentioned in product.action.ts
    
    );

    // setInterval({console.log("cd")},3000)
  }

}
