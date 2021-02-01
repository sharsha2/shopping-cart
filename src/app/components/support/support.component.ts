import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  url = '';
  supportForm: FormGroup;
  fieldTextType: boolean;

  constructor(private builder: FormBuilder) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.buildForm();
  }

  // tslint:disable-next-line:typedef
  buildForm() {
    this.supportForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  support() {
    console.log(this.supportForm.value);
  }
  // tslint:disable-next-line:typedef
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  // tslint:disable-next-line:typedef
  selectFile(event) {
    if (event.target.file) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.file[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }

}

