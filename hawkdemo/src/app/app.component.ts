import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment.development';
import { getFirestore, Timestamp, FieldValue } from 'firebase/firestore';

import { Firestore, collection, getDocs } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCUK5njym6GVoGD4cm0cJ0JIv3oVY5fKQ4',
  authDomain: 'firehawk-demo.firebaseapp.com',
  projectId: 'firehawk-demo',
  storageBucket: 'firehawk-demo.appspot.com',
  messagingSenderId: '212728406496',
  appId: '1:212728406496:web:3ba3c32c5b2d3798374b85',
  measurementId: 'G-7R94W0TGSE',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  //templateUrl: './app.component.html',
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <h1>{{ title }}</h1>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hawkdemo';

  constructor(private firestore: Firestore) {}
  async getData() {
    const appy = initializeApp(firebaseConfig);
    const db = getFirestore(appy);
    // const collect = collection(db, 'users');
    // const docs = getDocs(collect).then((snapshot) => {
    //   console.log('SNAPSHOT');
    //   console.log(snapshot.docs);
    //   return snapshot.docs[0];
    // });

    const coll = collection(db, 'users');
    const docs = await getDocs(coll);
    console.log(docs);
  }
}

/**
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUK5njym6GVoGD4cm0cJ0JIv3oVY5fKQ4",
  authDomain: "firehawk-demo.firebaseapp.com",
  projectId: "firehawk-demo",
  storageBucket: "firehawk-demo.appspot.com",
  messagingSenderId: "212728406496",
  appId: "1:212728406496:web:3ba3c32c5b2d3798374b85",
  measurementId: "G-7R94W0TGSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */
