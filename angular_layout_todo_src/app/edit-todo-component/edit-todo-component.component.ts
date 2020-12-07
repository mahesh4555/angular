import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import {AppState} from '../store/reducers/todo.reducer'
import {TodoService} from '../todo.service'
import {TodoTask} from '../todo-task'
import {select, Store } from '@ngrx/store';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {UPDATE_TODO} from '../store/actions/todo.actions'

@Component({
  selector: 'app-edit-todo-component',
  templateUrl: './edit-todo-component.component.html',
  styleUrls: ['./edit-todo-component.component.css']
})
export class EditTodoComponentComponent implements OnInit {

  
  taskModel = new TodoTask(null,"","",1);
  public differentStates: Array<Object> = [
    {value: '1', viewValue: 'Todo', id:1},
    {value: '2', viewValue: 'Inprogress', id:2},
    {value: '3', viewValue: 'Completed', id:3},
  ];

  
  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private store : Store<{todo:AppState}>,private todoService : TodoService) {


    //  this.taskModel = this.data;
     console.log("constructor EDIT TODO  data :",this.taskModel)
    
    this.store.pipe(select('todo')).subscribe(state => {  //'product' -> name defined in StoreModule.forRoot()
    console.log("constructor inside header")
    console.log("State:",state)

    // this.loggedInStatus = state['isLoggedIn']
    // console.log("loggedInStatus:",this.loggedInStatus)
    


 });

   }

  ngOnInit(): void {
    console.log("edit onInit")
    this.taskModel = new TodoTask(this.data._id,this.data.name,this.data.content,this.data.currentState);
  }

   ngOnChanges(){
        console.log("ngOnChanges")
   }

  onSubmit(todo){
    console.log("submitted data :",this.taskModel)
    console.log("submittedc data :",todo)
    todo['_id'] = this.taskModel.id;
    console.log("submitted edit data :",todo)
    this.updateData(todo)


  }



  updateData(data){

    let payload : any = data
    console.log("Task updateData")

    this.store.dispatch(
      new UPDATE_TODO(payload)   //type is mentioned in product.action.ts
    
    );
  }
}
