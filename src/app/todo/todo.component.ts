import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private service:TodoService){}

  todos:any = []

  refresh(){
    this.service.getNotes().subscribe((res)=>{
      this.todos = res
    })
  }

  ngOnInit(){
    this.refresh()
  }

  addNotes(newItem:string){
    this.service.addNotes(newItem).then((res)=>{
      console.log(res)
      this.refresh()
    })
  }
  
  deleteNotes(id:string){
    this.service.deleteNote(id).then((res)=>{
      console.log(res)
      this.refresh()
    })
  }

}
