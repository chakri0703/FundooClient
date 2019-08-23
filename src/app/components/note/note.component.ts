import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NoteServiceService } from 'src/app/services/note/note-service.service';
import { Note } from 'src/app/core/models/note/note';

// import { Note } from "./model/Note";


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {


  
   note:Note=new Note();
  public show: boolean = false;
  public title: String = "";
  public description: string = "";
  constructor(
    private snackbar: MatSnackBar,
  //  private note:Note,
   private noteService:NoteServiceService,
  ) { }

  ngOnInit() {
  }

  toggle() {


    //this.addNote()
    this.show = !this.show;

  }
  close(){
    this.addNote()
    this.show = !this.show;
    
  }

  addNote() {
    var noteData = {
      "title": this.note.title,
      "description": this.note.description
    }
    console.log(noteData);

    this.noteService.addNote(noteData).subscribe(
      (response: any) => {
        console.log('back end response ==>', response);
        this.snackbar.open("note added successful", "End Now ", { duration: 4000 })



      },
      error => {
        console.log("error in adding note 52 --------", error);
        this.snackbar.open("error in saving note", "End Now ", { duration: 4000 })

      }
    )
  }
}
