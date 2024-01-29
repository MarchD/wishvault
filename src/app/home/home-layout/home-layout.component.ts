import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
})
export class HomeLayoutComponent implements OnInit {
  title = 'wishvault';
  navigationList: { label: string, path: string }[] = [
    {
      label: 'Profile',
      path: '/profile'
    },
    {
      label: 'Login',
      path: '/login'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
