import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {
  FormArray, FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-mycharts-tlist',
  templateUrl: './tlist.component.html',
  styles: [
    `
      .dynamic-delete-button {
        cursor: pointer;
        position: relative;
        top: 4px;
        font-size: 24px;
        color: #999;
        transition: all 0.3s;
      }

      .dynamic-delete-button:hover {
        color: #777;
      }

      .passenger-input {
        width: 60%;
        margin-right: 8px;
      }

      [nz-form] {
        max-width: 600px;
      }

      .add-button {
        width: 60%;
      }
    `
  ]

})
export class MychartsTlistComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      city: this.fb.array([])
    });
    this.addField();
  }

  get city() {
    return this.validateForm.get('city') as FormArray
  }

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }

    let cityGroup = this.fb.group({
      cityName: ['',Validators.required]
    })
    this.city.push(cityGroup)
    console.log(this.city.value)
    // this.validateForm.addControl(
    //   new UntypedFormControl(null, Validators.required)
    // );
  }

  removeField(i: number, e: MouseEvent): void {
    e.preventDefault();
    if (this.city.length > 1) {
      this.city.removeAt(i);
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

}
