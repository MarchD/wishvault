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
    EditIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
