import { Component, OnInit } from '@angular/core';

import {select, Store } from '@ngrx/store';
import {AppState} from '../../store/reducers/todo.reducer'

import { map, filter } from 'rxjs/operators';

import {Todo} from '../../store/models/todo.model'
import {TodoService} from '../../todo.service'

import {ADD_TODO, ADD_ALL_TODO,DELETE_TODO, UPDATE_TODO} from '../../store/actions/todo.actions'
import {ActivatedRoute,ParamMap} from '@angular/router'
// import { parse } from 'path';

// import {} from '@angular/router'



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  public todosData : Array<Todo>;
  public  activeState: number;

  public currentStatetodosData : Array<Todo>;
  public errorMsg: string;

  // public differentStates = ["todo", "inprogress", "completed"]
  public differentStates: Array<Object> = [
    {value: '1', viewValue: 'Todo', id:1},
    {value: '2', viewValue: 'Inprogress', id:2},
    {value: '3', viewValue: 'Completed', id:3},
  ];

  // private store: Store<AppState>,
  constructor(private store : Store<{todo:AppState}>, private todoService : TodoService, private route: ActivatedRoute) {

    // console.log("In content layout, call getdata")
    // this.todoService.getData().subscribe(data =>{
    //     console.log("In content layout, Fetched data :", data);
    //     this.todoData = data;

    //     console.log("content layout todoData fetched:", this.todoData)

    //     // this.addTodo(data)
    // })

    this.store.pipe(select('todo')).subscribe(state => {  //'product' -> name defined in StoreModule.forRoot()
        console.log("constructor inside content")
        console.log("State:",state)

        // this.todosData = state['todosData']
        this.activeState = state['activeState']
        // console.log("All:",this.todosData)
        console.log("activestate :", this.activeState)
        // console.log(state[0])
        this.currentStatetodosData = state['todosData'].filter(todo=>{ 
          return todo.currentState == this.activeState

        })


 
     });


    console.log(" constructor outside content")
     this.route.paramMap.subscribe((params:ParamMap)=>{
       let id = parseInt(params.get('id'))
     })


   }
  // constructor(private dataService: DataService) { }
  // 
  ngOnInit() {
    // this.dataService.getData().subscribe(
    //   (data) => (this.data = data,
    //     console.log(this.data)
    //     ),
    //   (error) => {
    //     this.errorMsg = error;
    //     console.log(this.errorMsg);
    //   }
    // );
    // console.log('hello completed');
    // console.log(this.data);
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



}
// encapsulation: ViewEncapsulation.None