import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note/note-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(
    private noteService: NoteServiceService,
  ) { }

  ngOnInit() {
    this.getAllArchive();
  }
  allNotes: any = JSON.parse(localStorage.getItem('archived'));
  getAllArchive() {
    console.log("Archived Notes");
    this.noteService.getAllArchive().subscribe(
      (response: any) => {
        console.log("archived notes=====>", response.data);
        localStorage.setItem('archived', JSON.stringify(response.data))

      },
      (errors) => {
        console.log("errors====>", errors);

      }
    )
  }
  unArchive(note){

    console.log(note);
    
  }
 

}
