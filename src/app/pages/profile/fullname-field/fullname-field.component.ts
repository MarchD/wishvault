import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullname-field',
  templateUrl: './fullname-field.component.html',
  styleUrls: ['./fullname-field.component.css']
})
export class FullnameFieldComponent implements OnInit {
  isShownEditButton: boolean = false;

  @Input()
  fullname: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
