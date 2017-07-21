import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

// Firebase imports
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Component imports
import { AppComponent } from './app.component';
import { NewGeocacheComponent } from './new-geocache/new-geocache.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GeocacheDetailComponent } from './geocache-detail/geocache-detail.component';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NewGeocacheComponent,
    WelcomeComponent,
    GeocacheDetailComponent,
    GeocacheListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
