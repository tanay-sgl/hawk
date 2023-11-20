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
    console.log(condition);
    if (
      //condition == '_make' ||
      condition == '_model'
      //condition == '_color'
    ) {
      return where(condition, '==', value as string);
    }

    if (condition == '_minPrice') {
      return where('price', '>', value as string);
    }
    return where('price', '<', value as string);
  }

  private generateQueryConditions(filter: Filter): QueryConstraint[] {
    let queryConditions: QueryConstraint[] = [];

    for (const key in filter) {
      queryConditions.push(
        this.generateQueryConstraint(key, filter[key as keyof Filter])
      );
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
