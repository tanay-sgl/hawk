import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { LocalstorageService } from './localstorage.service';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hawkdemo';

  //firestore: Firestore = inject(Firestore);
  cars: any = [];
  carsString: string = '';

  constructor(
    private fireservice: FirestoreService,
    private localservice: LocalstorageService
  ) {}

  // refreshUsers() {
  //   this.service.getUsers().subscribe((result) => {
  //     console.log(result);
  //     this.users = result;
  //   });
  // }

  ngOnInit(): void {
    this.fireservice.getCars().subscribe((result) => {
      console.log(result);
      this.cars = result;
      this.carsString = JSON.stringify(this.cars);
    });
  }
}
