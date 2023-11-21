import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp } from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


export const firebaseConfig = {
  apiKey: "AIzaSyBOhAS3n-6P-EwiOiFdwJN9YN_PUMx9Fc4",
  authDomain: "empleados-c5939.firebaseapp.com",
  projectId: "empleados-c5939",
  storageBucket: "empleados-c5939.appspot.com",
  messagingSenderId: "880855113922",
  appId: "1:880855113922:web:a5350c94c6f5aee3fe1b5b"
};

initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
