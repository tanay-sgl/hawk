import { Component } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hawkdemo';

  firestore: Firestore = inject(Firestore);
  users: any = [];
  userString: string = '';

  constructor(private service: FirestoreService) {
    this.service.getCars().subscribe((result) => {
      console.log(result);
      this.users = result;
      this.userString = JSON.stringify(this.users);
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
