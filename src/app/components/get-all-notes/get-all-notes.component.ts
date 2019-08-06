import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/services/note/note-service.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  constructor(
    
    private snackbar: MatSnackBar,
    private noteService: NoteServiceService,
    
  ) { }

  ngOnInit() {
    this.getAllNotes();
  }

  

  getAllNotes() {

    this.noteService.getAllNotes().subscribe(
      (response: any) => {
        console.log('data check ===>', response.data);
        localStorage.setItem('notes', JSON.stringify(response.data))

      },
      error => {
        console.log("error ", error);

      }
    )
  }
  allNotes: any = JSON.parse(localStorage.getItem('notes'));
  


  
  archive(note){
    // console.log(note);
    
    let noteData={
      "title":note.title,
      "description":note.description
    }
    console.log(noteData);
    
    this.noteService.archive(noteData).subscribe(
      (response:any)=>{
        console.log(response);
        this.snackbar.open("note Archived","end now",{duration:3000})
      },
      error=>{
        console.log(error);
        this.snackbar.open("not possible ","end now",{duration:3000})
        this.noteService.getAllNotes().subscribe(
          (response: any) => {
            console.log('data check ===>', response);
            localStorage.setItem('notes', JSON.stringify(response))
    
          },
          error => {
            console.log("error ", error);
    
          }
        )
      }
    )

  }
  delete(note){
    // console.log(note);
  
      let noteData={
        "title":note.title,
        "description":note.description
      }
      console.log(noteData);
      
      this.noteService.deleteNote(noteData).subscribe(
        (response:any)=>{
          console.log(response);
          this.snackbar.open("note Deleted Sucessfully","end now",{duration:3000})
        },
        error=>{
          console.log(error);
          this.snackbar.open("failed to delete note","end now"+error,{duration:3000})
        }
      )
  }
}
