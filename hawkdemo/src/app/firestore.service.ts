import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Filter } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getCars(filter: Filter) {
    console.log(filter);
    let collectionInstance = collection(this.firestore, 'cars');
    return collectionData(query(collectionInstance));
  }
}
