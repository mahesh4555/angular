import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service'
import {TodoTask} from '../todo-task'
import {select, Store } from '@ngrx/store';
import {AppState} from '../store/reducers/todo.reducer'
import {ADD_TODO} from '../store/actions/todo.actions'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  loggedInStatus: boolean;
  public differentStates: Array<Object> = [
    {value: '1', viewValue: 'Todo', id:1},
    {value: '2', viewValue: 'Inprogress', id:2},
    {value: '3', viewValue: 'Completed', id:3},
  ];

  taskModel = new TodoTask("","","",1)

  constructor(private store : Store<{todo:AppState}>,private todoService : TodoService) {

    this.store.pipe(select('todo')).subscribe(state => {  //'product' -> name defined in StoreModule.forRoot()
    console.log("constructor inside header")
    console.log("State:",state)

    this.loggedInStatus = state['isLoggedIn']
    console.log("loggedInStatus:",this.loggedInStatus)

 });

   }

  ngOnInit(): void {

    
  }


  onSubmit(todo){
    console.log("submitted data :",this.taskModel)
    console.log("submittedc data :",todo)
    this.addData(todo)
  }

  addData(data){

    this.todoService.addData(data).subscribe(new_data =>{
      console.log("In add todo component, Fetched data :", new_data);
      let payload : any = new_data
      this.store.dispatch(
      new ADD_TODO(payload)   //type is mentioned in product.action.ts
    
    );
  })
  }




}
