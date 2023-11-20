import { Injectable } from '@angular/core';
import {
  Firestore,
  QueryConstraint,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Car } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  private generateQueryConstraint(
    condition: string,
    value: string | number
  ): QueryConstraint {
    if (condition == 'make' || condition == 'model' || condition == 'color') {
      return where(condition, '==', value as string);
    }
    return where(condition, '<=', value as string);
  }

  private generateQueryConditions(filter: Car): QueryConstraint[] {
    let queryConditions: QueryConstraint[] = [];

    for (const key in filter) {
      queryConditions.push(
        this.generateQueryConstraint(key, filter[key as keyof Car])
      );
    }

    return queryConditions;
  }

  getCars(filter: Car) {
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
