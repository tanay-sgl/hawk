import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import '@angular/compiler';
import { FirestoreService } from '../firestore.service';
import { LocalstorageService } from '../localstorage.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [MatListModule, CommonModule, MatCardModule],
})
export class ListComponent implements OnInit {
  fireservice: FirestoreService;
  localservice: LocalstorageService;
  cars: any[] = [];

  make: any;
  constructor(
    fireservice: FirestoreService,
    localservice: LocalstorageService
  ) {
    this.fireservice = fireservice;
    this.localservice = localservice;
  }

  ngOnInit(): void {
    this.fireservice.getCars(this.localservice).subscribe((result) => {
      console.log(result);
      this.cars = result;
    });
    this.fireservice.getMake().subscribe((result) => {
      console.log(result);
      this.make = result;
    });
    console.log(this.fireservice);
  }
}
