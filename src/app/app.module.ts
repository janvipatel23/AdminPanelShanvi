import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



//material modules
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatDividerModule,MatCardModule,MatButtonModule,MatListModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//firebase
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AddEventComponent } from './add-event/add-event.component';


export const firebaseConfig = {
  apiKey: "AIzaSyByIuTCI4NbEbrHZ-4op4Jco1TG0bLmlMc",
   authDomain: "ljkonnect-bb276.firebaseapp.com",
   databaseURL: "https://ljkonnect-bb276.firebaseio.com",
   projectId: "ljkonnect-bb276",
   storageBucket: "ljkonnect-bb276.appspot.com",
   messagingSenderId: "1085290064076",
   appId: "1:1085290064076:web:7b70b1c811c5437970ba69",
   measurementId: "G-V4ZQT2CH35"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NavBarComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule, // imports firebase/firestore, only needed for database features
      AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
      AngularFireStorageModule, // imports firebase/storage only needed for storage features
      AngularFireDatabaseModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }