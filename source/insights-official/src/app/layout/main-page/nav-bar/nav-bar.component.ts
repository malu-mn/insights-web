import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  public showLogo = false;

  constructor(
    private readonly _router: Router
  ) {
    this.updateLogoDisplay(_router.url);
  }

  ngOnInit(): void {
    this._subscription = this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(navEnd => {
        this.updateLogoDisplay(navEnd['url']);
      });
  }

  ngOnDestroy(): void {
    if (this._subscription) { this._subscription.unsubscribe(); }
  }

  private updateLogoDisplay(url: string): void {
    // Don't show logo for home route ('')
    if (url) {
      this.showLogo = url !== '/';
    }
  }
}
