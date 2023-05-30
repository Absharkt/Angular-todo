import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firestore : Firestore) { }

  getNotes(){
    let tasks = collection(this.firestore,'todos')
    return collectionData(tasks,{idField:'id'})
  }

  addNotes(desc:string){
    let data = {task:desc}
    let notesCollection = collection(this.firestore,'todos')
    return addDoc(notesCollection,data)
  }

  deleteNote(id:string){
    let check = confirm('Are you sure you want to delete this item?')
    let docRef = doc(this.firestore,'todos/'+id)
    return deleteDoc(docRef)
  }
}
