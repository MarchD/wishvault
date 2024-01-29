import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fullname-field',
  templateUrl: './fullname-field.component.html',
  styleUrls: ['./fullname-field.component.css'],
})
export class FullnameFieldComponent implements OnInit {
  isShownEditButton: boolean = false;
  isEdit: boolean = false;

  @Input()
  fullname: string = '';
  @Output()
  onChangeFullname = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.isEdit = false;
    this.onChangeFullname.emit(form.value.fullname)
  }
}
