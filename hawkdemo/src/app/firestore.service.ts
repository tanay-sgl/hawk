import { Injectable } from '@angular/core';
import {
  Firestore,
  QueryConstraint,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Car, Filter } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  private generateQueryConstraint(
    condition: string,
    value: string | number
  ): QueryConstraint {
    console.log(value);
    if (condition == '_make') {
      return where('Make', '==', value);
    }
    if (condition == '_model') {
      return where('Model', '==', value);
    }
    if (condition == '_color') {
      return where('Color', '==', value);
    }

    if (condition == '_minPrice') {
      return where('Price', '>', value);
    }
    return where('Price', '<', value);
  }

  private generateQueryConditions(filter: Filter): QueryConstraint[] {
    let queryConditions: QueryConstraint[] = [];

    for (const key in filter) {
      if (
        key == '_make' ||
        key == '_model' ||
        key == '_color' ||
        key == '_minPrice' ||
        key == '_maxPrice'
      ) {
        console.log(key);
        console.log(filter[key as keyof Filter]);
        const value = filter[key as keyof Filter];

        if (value != null && value != '') {
          queryConditions.push(this.generateQueryConstraint(key, value));
        }
      }
    }

    return queryConditions;
  }

  getMake() {
    return collectionData(collection(this.firestore, 'make'));
    // return collectionData(
    //   query(collection(this.firestore, 'make'), where('make', '==', 'Porsche'))
    // );
  }

  getCars(filter: Filter) {
    console.log(filter);
    const queryConditions = this.generateQueryConditions(filter);
    const complexQuery = query(
      collection(this.firestore, 'cars'),
      ...queryConditions
    );
    console.log(queryConditions);
    console.log(queryConditions);
    return collectionData(complexQuery);
  }
}
