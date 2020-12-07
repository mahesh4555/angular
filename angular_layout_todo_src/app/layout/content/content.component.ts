import { Component, OnInit } from '@angular/core';

import {select, Store } from '@ngrx/store';
import {AppState} from '../../store/reducers/todo.reducer'

import { map, filter } from 'rxjs/operators';

import {Todo} from '../../store/models/todo.model'
import {TodoService} from '../../todo.service'

import {ADD_TODO, ADD_ALL_TODO,DELETE_TODO, UPDATE_TODO,CHANGE_LOGIN_STATUS} from '../../store/actions/todo.actions'
import {ActivatedRoute,ParamMap} from '@angular/router'
// import { parse } from 'path';
import {HttpClient} from '@angular/common/http'

// import {} from '@angular/router'

import   {MatDialog} from '@angular/material/dialog'
import {EditTodoComponentComponent} from '../../edit-todo-component/edit-todo-component.component'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  public todosData : Array<Todo>;
  public todoData : Array<Todo>;
  filteredData : Array<Todo>;
  public  activeState: number;

  public currentStatetodosData : Array<Todo>;
  public errorMsg: string;

  // public differentStates = ["todo", "inprogress", "completed"]
  public differentStates: Array<Object> = [
    {value: '1', viewValue: 'Todo', id:1},
    {value: '2', viewValue: 'Inprogress', id:2},
    {value: '3', viewValue: 'Completed', id:3},
    {value: '4', viewValue: 'All', id:4},
  ];
  numbers =[];
  loggedInStatus: boolean ;
  url : string = "http://localhost:4000/";

  // private store: Store<AppState>,
  constructor(private store : Store<{todo:AppState}>, private todoService : TodoService, 
    private route: ActivatedRoute,private http:HttpClient,
    public dialog : MatDialog) {

    console.log("In content layout, call getdata")
    // this.todoService.getData().subscribe(data =>{
    //     console.log("In content layout, Fetched data :", data);
    //     this.todoData = data;

    //     console.log("content layout todoData fetched:", this.todoData)

    //     // this.addTodo(data)
    // })
    for(let i=0; i <100; i++){
      this.numbers.push(i);
    }

    this.store.pipe(select('todo')).subscribe(state => {  //'product' -> name defined in StoreModule.forRoot()
        console.log("constructor inside content")
        console.log("State:",state)

        // this.todosData = state['todosData']
        this.activeState = state['activeState']
        this.loggedInStatus = state['isLoggedIn']
       console.log("loggedInStatus:",this.loggedInStatus)
        // console.log("All:",this.todosData)
        console.log("activestate :", this.activeState)
        // console.log(state[0])
        this.currentStatetodosData = state['todosData'].filter(todo=>{ 
          if(this.activeState == 4){
            return  todo.currentState
          }
          return todo.currentState == this.activeState

        })
        this.filteredData = this.currentStatetodosData


 
     });


    console.log(" constructor outside content")
     this.route.paramMap.subscribe((params:ParamMap)=>{
       let id = parseInt(params.get('id'))
     })


   }
  // constructor(private dataService: DataService) { }
  // 
  ngOnInit() {
   
    console.log(" ngOnInit Content")
   

 }

 openDialog(data : Object){
   console.log("Dialog :",data)

  const dialogRef = this.dialog.open(EditTodoComponentComponent,
    { height: '500px',
    width: '700px', data : data}, 
  );

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
  console.log("d")
  // (EditTodoComponentComponent)
 }

  

  changeState(event,id){
    console.log("event:", event)
    console.log(event.target.id)
    console.log(event.target.value)
    console.log(id)
    


    let data = {
      _id: id,
      changedState: event.target.value,
    };

    this.todoService.updateState(data).subscribe(updated_data =>{
      console.log("In content layout, Fetched data :", updated_data);
      let payload : any = updated_data;
      this.store.dispatch(
        new UPDATE_TODO(payload)   //type is mentioned in product.action.ts
      
      );

     
      // this.todoData = data;

      // console.log("content layout todoData fetched:", this.todoData)

      // this.addTodo(data)
  })
}


onSearchChange(event){
  console.log(event.target.value)
  this.filteredData =this.filterTodos(event.target.value)
  console.log("Filtered data:",this.filteredData)
  // this.currentStatetodosData =this.sortTodos(event.target.value)
  // console.log("Sorted data:",this.currentStatetodosData)
}

filterTodos(val){
  var categoryList = []

  if (val === '' || val === null) {
      return this.currentStatetodosData;
  }
  if (typeof val != "string") {
    return this.currentStatetodosData;
}
  return val ? this.currentStatetodosData.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.currentStatetodosData;

    

}


sortTodos(val){
  var categoryList = []
  if (typeof val != "string") {
      return this.currentStatetodosData;
  }
  if (val === '' || val === null) {
      return this.currentStatetodosData;
  }
  // return val ? this.todoData.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1)
  //     : this.todoData;
  return this.currentStatetodosData.slice().sort((obj1, obj2) => {
    const name1 = obj1.name.toLowerCase();
    const name2 = obj2.name.toLowerCase();
    console.log("n1,n2:",name1,name2)
   let r = name1.toLowerCase().indexOf(val.toLowerCase())
   let s = name2.toLowerCase().indexOf(val.toLowerCase())
   console.log("r,s:",r,s)
    if (r > s) { return -1; };
    if (r < s) { return 1; };
    return 0
 
  
});

}



deleteTodo(data){
  console.log("deleteTodo")
  console.log(data)
  let payload : any = data
  console.log("Task deleteData")

  this.store.dispatch(
    new DELETE_TODO(payload)   //type is mentioned in product.action.ts
  
  );
}



}
// encapsulation: ViewEncapsulation.None