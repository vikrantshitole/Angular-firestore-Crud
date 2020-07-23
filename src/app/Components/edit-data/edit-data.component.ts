import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
})
export class EditDataComponent implements OnInit {
  Data;
  constructor(public crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.currentData.subscribe((Data) => (this.Data = Data));
    console.log(this.Data);

  }
}
