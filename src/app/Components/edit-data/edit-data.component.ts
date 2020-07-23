import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent implements OnInit {
  public Record;
  EditForm: FormGroup;
  Data: any;
  constructor(public router:Router, public crudService: CrudService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.crudService.currentData.subscribe((Data) => (this.Record = Data));
    this.Record = this.Record;

    this.EditForm = this.fb.group({
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
    this.EditForm.setValue({
      firstName: this.Record.firstName,
      lastName: this.Record.lastName,
      contactNumber: this.Record.contact,
      email: this.Record.email,
    });
  }
  editData() {
    this.crudService.updateData(this.Record.id, this.EditForm.value);
    this.router.navigate(['view'])
  }
}
