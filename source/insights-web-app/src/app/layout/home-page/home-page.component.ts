import { AppRoutesStrings } from './../utilities/app-constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private readonly _rourer: Router
  ) { }

  ngOnInit(): void {
  }

  public navigate(): void {
    this._rourer.navigate([AppRoutesStrings.main]);
  }

}
