import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import {HeaderComponent} from './layout/header/header.component'
import {AddTodoComponent} from './add-todo/add-todo.component'
const routes: Routes = [
  { path: 'add', component: AddTodoComponent },
  { path: 'todo', component: ContentComponent },
  { path: 'inprogress', component: ContentComponent },
  { path: 'completed', component: ContentComponent },
  { path: 'all', component: ContentComponent },
  { path: 'history', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
