import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ListsComponent } from './pages/lists/lists.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { NavComponent } from '../components/nav/nav.component';
import { AppModule } from '../app.module';
import { UserAvatarComponent } from '../components/user-avatar/user-avatar.component';
import {
  FullnameFieldComponent
} from './pages/profile/fullname-field/fullname-field.component';
import { EditIconComponent } from '../components/icons/edit-icon/edit-icon.component';
import { DoneIconComponent } from '../components/icons/done-icon/done-icon.component';
import { CrossIconComponent } from '../components/icons/cross-icon/cross-icon.component';
import { FormsModule } from '@angular/forms';
import { UserIconComponent } from '../components/icons/user-icon/user-icon.component';
import { LogoComponent } from '../components/icons/logo/logo.component';

@NgModule({
  imports: [ CommonModule, HomeRoutingModule, FormsModule ],
  declarations: [
    HomeLayoutComponent,
    ListsComponent,
    ProfileComponent,
    HeaderComponent,
    NavComponent,
    UserAvatarComponent,
    FullnameFieldComponent,
    EditIconComponent,
    DoneIconComponent,
    CrossIconComponent,
    UserIconComponent,
    LogoComponent,
  ],
  exports: [
    HeaderComponent
  ]
})

export class HomeModule { }
