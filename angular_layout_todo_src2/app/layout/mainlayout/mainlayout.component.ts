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
  filteredData : Array<Todo>;
  sortedData : Array<Todo>;
  numbers=[]
  constructor(private store : Store<{todo:AppState}>, private todoService : TodoService) {
 
     for(let i=0; i <100; i++){
       this.numbers.push(i);
     }
    console.log("In main layout, call getdata")
    this.todoService.getData().subscribe(data =>{
        console.log("In main layout, Fetched data :", data);
        this.todoData = data;
        // this.sortedData = data;

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

  onSearchChange(event){
    console.log(event.target.value)
    this.filteredData =this.filterTodos(event.target.value)
    console.log("Filtered data:",this.filteredData)
    this.todoData =this.sortTodos(event.target.value)
    console.log("Sorted data:",this.todoData)
  }

  filterTodos(val){
    var categoryList = []
    if (typeof val != "string") {
        return [];
    }
    if (val === '' || val === null) {
        return [];
    }
    return val ? this.todoData.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1)
        : this.todoData;

  }

  
  sortTodos(val){
    var categoryList = []
    if (typeof val != "string") {
        return this.todoData;
    }
    if (val === '' || val === null) {
        return this.todoData;
    }
    // return val ? this.todoData.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1)
    //     : this.todoData;
    return this.todoData.slice().sort((obj1, obj2) => {
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



//   filterCategoryList(val) {
//     var categoryList = []
//     if (typeof val != "string") {
//         return [];
//     }
//     if (val === '' || val === null) {
//         return [];
//     }
//     return val ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
//         : this.allPosts;
// }

}
