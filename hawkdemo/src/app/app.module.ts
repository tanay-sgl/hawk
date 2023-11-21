import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirestoreService } from './firestore.service';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { LocalstorageService } from './localstorage.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FilterComponent,
    ListComponent,
    FormsModule,
    MatSidenavModule,
    HeaderComponent,
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
    NoopAnimationsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"firehawk-demo","appId":"1:212728406496:web:3ba3c32c5b2d3798374b85","storageBucket":"firehawk-demo.appspot.com","apiKey":"AIzaSyCUK5njym6GVoGD4cm0cJ0JIv3oVY5fKQ4","authDomain":"firehawk-demo.firebaseapp.com","messagingSenderId":"212728406496","measurementId":"G-7R94W0TGSE"})),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
  providers: [FirestoreService, LocalstorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
