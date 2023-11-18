import { Component } from '@angular/core';
import { ConnectService } from './connect.service';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hawkdemo';

  firestore: Firestore = inject(Firestore);
  users: any = [];

  constructor(private service: ConnectService) {
    this.service.getUsers().subscribe((result) => {
      console.log(result);
      this.users = result;
    });
  }

  // refreshUsers() {
  //   this.service.getUsers().subscribe((result) => {
  //     console.log(result);
  //     this.users = result;
  //   });
  // }

  // ngOnInitialize() {
  //   this.refreshUsers();
  // }
}
