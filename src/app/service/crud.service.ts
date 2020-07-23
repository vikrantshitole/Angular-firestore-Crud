import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(public firestoreService: AngularFirestore) {}

  private Data = new BehaviorSubject('default message');
  currentData = this.Data.asObservable();
  setData(data) {
    this.Data.next(data);
  }
  insert_Data(data) {
    return this.firestoreService.collection('Employee').add(data);
  }
  get_Data() {
    return this.firestoreService.collection('Employee').snapshotChanges();
  }
  delete_Data(id) {
    return this.firestoreService.collection('Employee').doc(id).delete();
  }
}
