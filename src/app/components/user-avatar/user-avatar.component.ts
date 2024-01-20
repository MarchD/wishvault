import { Component, Input, OnInit } from '@angular/core';
const src = 'https://picsum.photos/200';


@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})

export class UserAvatarComponent implements OnInit {

  @Input()
  src?: string = src;
  alt?: string = "Maryna";

  constructor() { }

  ngOnInit(): void {
  }
}
