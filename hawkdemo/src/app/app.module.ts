import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirestoreService } from './firestore.service';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { LocalstorageService } from './localstorage.service';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterComponent,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCUK5njym6GVoGD4cm0cJ0JIv3oVY5fKQ4',
        authDomain: 'firehawk-demo.firebaseapp.com',
        projectId: 'firehawk-demo',
        storageBucket: 'firehawk-demo.appspot.com',
        messagingSenderId: '212728406496',
        appId: '1:212728406496:web:3ba3c32c5b2d3798374b85',
        measurementId: 'G-7R94W0TGSE',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
  providers: [FirestoreService, LocalstorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
