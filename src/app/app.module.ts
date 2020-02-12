import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from '@angular/fire';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcySmggNJfe9J9TvYvkzB_A1xsvnRqzKQ",
  authDomain: "nextcutdev.firebaseapp.com",
  databaseURL: "https://nextcutdev.firebaseio.com",
  projectId: "nextcutdev",
  storageBucket: "nextcutdev.appspot.com",
  messagingSenderId: "64410353141",
  appId: "1:64410353141:web:23f66c077fd8255391f4bc"
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    // 3. Initialize firebase
    AngularFireModule.initializeApp(firebaseConfig),
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
