import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getCars() {
    let collectionInstance = collection(this.firestore, 'cars');
    return collectionData(
      collectionInstance
      //query(collectionInstance, where('Make', '!=', 'Porsche'))
    );
  }
}
