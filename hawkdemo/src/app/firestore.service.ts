import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Car } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getCars(filter: Car) {
    let collectionInstance = collection(this.firestore, 'cars');
    return collectionData(
      query(collectionInstance, where('Make', '==', filter.make))
    );
  }
}
