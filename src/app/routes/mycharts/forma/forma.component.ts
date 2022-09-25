import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-mycharts-forma',
  templateUrl: './forma.component.html',
})
export class MychartsFormaComponent implements OnInit {



  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit(): void { }


  onSubmit(f: NgForm) {
    console.log(f.value)
  }
}
