import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http/note/note-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(
    private http: HttpService,

  ) { }

  getAllNotes() {
    return this.http.get('getAllNotes');
  }
  addNote(noteData) {
    return this.http.post('addNote', noteData);
  }
  deleteNote(noteData) {
    return this.http.post('deleteNote', noteData);
  }
  getAllDelete(){
    return this.http.get('getAllDelete');
  }
  delete(note){
    return this.http.post('delete',note);
  }
  restore(note){
    return this.http.post('restore',note);
  }
  archive(note){
    return this.http.post('archive',note);

  }
  unarchive(note){
    return this.http.post('unarchive',note);
  }
  getAllArchive(){
    return this.http.get('getAllArchive');
  }
  updateNote(note){
    return this.http.post('updateNote',note);
  }
}
