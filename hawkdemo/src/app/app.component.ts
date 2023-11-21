import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { LocalstorageService } from './localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hawkdemo';

  cars: any = [];
  carsString: string = '';
  make: any;
  fireservice: FirestoreService;
  localservice: LocalstorageService;
  constructor(
    fireservice: FirestoreService,
    localservice: LocalstorageService
  ) {
    this.fireservice = fireservice;
    this.localservice = localservice;
  }

  ngOnInit(): void {
    // this.fireservice.getCars(this.localservice).subscribe((result) => {
    //   console.log(result);
    //   this.cars = result;
    //   this.carsString = JSON.stringify(this.cars);
    // });
    // this.fireservice.getMake().subscribe((result) => {
    //   console.log(result);
    //   this.make = result;
    // });
    // console.log(this.fireservice);
  }

  refresh(): void {
    window.location.reload();
    this.localservice = new LocalstorageService();
    console.log(this.localservice);
  }
}
