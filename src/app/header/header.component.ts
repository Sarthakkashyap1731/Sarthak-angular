import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name = 'Sarthak Kashyap';
  DOB = '07-31-1999';
  number = '9826992097';
  email = 'kashyapsarthak177@gmail.com';

  constructor() {}

  ngOnInit() {}
}
