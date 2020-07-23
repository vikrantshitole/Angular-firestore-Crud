import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public firestoreService:AngularFirestore) { }
  insert_Data(data){
    return this.firestoreService.collection('Employee').add(data);
  }
  get_Data(){
    return this.firestoreService.collection('Employee').snapshotChanges();
  }
}
