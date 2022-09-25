import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';

@Component({
  selector: 'app-mycharts-formb',
  templateUrl: './formb.component.html',
})
export class MychartsFormbComponent implements OnInit {

  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  ngOnInit(): void {
    this.addContacts()
  }

  contactForm: FormGroup = new FormGroup({
    contacts: new FormArray([])
  })

  get contacts() {
    return this.contactForm.get('contacts') as FormArray
  }

  addContacts() {
    let myContacts: FormGroup = new FormGroup({
      address: new FormControl(),
      phone: new FormControl(),
      user: new FormControl(),
    })
    this.contacts.push(myContacts)
  }

  removeContact(i: number) {
    this.contacts.removeAt(i)
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }
}
