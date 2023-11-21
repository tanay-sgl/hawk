import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import '@angular/compiler';
import { FirestoreService } from '../firestore.service';
import { LocalstorageService } from '../localstorage.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [MatListModule, CommonModule, MatCardModule, MatButtonModule],
})
export class ListComponent implements OnInit {
  fireservice: FirestoreService;
  localservice: LocalstorageService;
  cars: any[] = [];
  //make: any;
  constructor(
    fireservice: FirestoreService,
    localservice: LocalstorageService
  ) {
    this.fireservice = fireservice;
    this.localservice = localservice;
  }

  sortYear() {
    this.cars = this.cars.sort((n1, n2) => {
      return n1.Year - n2.Year;
    });
  }

  sortKm() {
    this.cars = this.cars.sort((n1, n2) => {
      return n1.Km - n2.Km;
    });
  }

  ngOnInit(): void {
    this.fireservice.getCars(this.localservice).subscribe((result) => {
      this.cars = result;
    });
    // this.fireservice.getMake().subscribe((result) => {
    //   this.make = result;
    // });
  }
}
