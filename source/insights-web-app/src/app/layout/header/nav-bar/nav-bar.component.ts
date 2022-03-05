import { IPageConfig } from './../../../models/page-config';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public showLogo = false;

  constructor(
    private readonly _activedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this._router.events.subscribe(change => {
      
      var currentUrl = change['url'];
      console.log('url' + currentUrl)

      // Don't show logo for home route ('')
      if(currentUrl) {
        this.showLogo = currentUrl !== '/';
      }
      
    })
  }

}
