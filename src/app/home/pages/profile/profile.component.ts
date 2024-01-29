import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fullname: string = 'Maryna Marynivna'
  constructor(private dataService: DataService) {}
  onChangeName(newName: string) {
    this.fullname = newName;
  }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      console.log(data,'data')
    });
  }
}
