import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  constructor(private firestore: Firestore) {}

  getUsers() {
    let collectionInstance = collection(this.firestore, 'users');
    return collectionData(collectionInstance);
  }
}
