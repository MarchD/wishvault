import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/icons/logo/logo.component';
import { ListsComponent } from './pages/lists/lists.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { UserIconComponent } from './components/icons/user-icon/user-icon.component';
import { EmailFieldComponent } from './pages/profile/email-field/email-field.component';
import { PasswordFieldComponent } from './pages/profile/password-field/password-field.component';
import { FullnameFieldComponent } from './pages/profile/fullname-field/fullname-field.component';
import { EditIconComponent } from './components/icons/edit-icon/edit-icon.component';
import { CrossIconComponent } from './components/icons/cross-icon/cross-icon.component';
import { DoneIconComponent } from './components/icons/done-icon/done-icon.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ListsComponent,
    ProfileComponent,
    NavComponent,
    UserAvatarComponent,
    UserIconComponent,
    EmailFieldComponent,
    PasswordFieldComponent,
    FullnameFieldComponent,
    EditIconComponent,
    CrossIconComponent,
    DoneIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
