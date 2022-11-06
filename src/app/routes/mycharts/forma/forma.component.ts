import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-mycharts-forma',
  templateUrl: './forma.component.html'
})
export class MychartsFormaComponent implements OnInit {
  procedureInfo: any;

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit(): void {
    this.getProcedureInfoList();
  }

  getProcedureInfoList() {
    this.http.get('http://localhost:8082/tdms-procedure-info/info').subscribe((res: any) => {
      console.log(res);
      this.procedureInfo = res;
    });
  }
}
