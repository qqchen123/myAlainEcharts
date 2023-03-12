import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {range, from, forkJoin, fromEvent, interval, of} from 'rxjs'
import {
  map,
  switchMap,
  take,
  takeWhile,
  takeUntil,
  throttleTime,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators'

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-mycharts-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class MychartsLoginComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 50,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 47,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 36,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '1',
      name: 'John Brown',
      age: 35,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 34,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '1',
      name: 'John Brown',
      age: 33,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 31,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  validateForm!: UntypedFormGroup;
  names: string = "namesbak";
  // names1: string = "names"
  tnum:number = 3;
  widthConfig: string[]=['1','1','1','1','1','1','22'];

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.tnum = 2;
  }


  changecss() {
    this.tnum=0
  }
}
