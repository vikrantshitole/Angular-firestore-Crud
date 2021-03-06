import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-input-data',
  templateUrl: './demo-input-data.component.html',
  styleUrls: ['./demo-input-data.component.css'],
})
export class DemoInputDataComponent implements OnInit {
  InputForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public crudService: CrudService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.InputForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  InputData() {
    console.log(this.InputForm.value);
    this.crudService
      .insert_Data(this.InputForm.value)
      .then((data) => {
        console.log(data);
        this.router.navigate(['view']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
