import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css'],
})
export class ViewDataComponent implements OnInit {
  Data;
  count: number = 0;
  constructor(public crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.get_Data().subscribe((data) => {
      this.Data = data.map((e) => {
        return {
          id: e.payload.doc.id,
          count: this.count + 1,
          firstName: e.payload.doc.data()['firstName'],
          lastName: e.payload.doc.data()['lastName'],
          contact: e.payload.doc.data()['contactNumber'],
          email: e.payload.doc.data()['email'],
        };
        this.count = this.count + 1;
      });
    });
  }
  editRecord(Record){

  }

  deleteRecord(id) {
    this.crudService.delete_Data(id);
  }
}
