import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrls: ['./opendialog.component.scss']
})
export class OpendialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data :any

  ) { }

  ngOnInit() {
  }

}
