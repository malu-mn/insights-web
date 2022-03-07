
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { RouteManagerService } from './../services/route-manager.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  private _currentUrl = '';

  public canMoveLeft: boolean = false;
  public canMoveRight: boolean = false;

  constructor(
    private readonly _router: Router,
    private readonly _routeManager: RouteManagerService,
  ) {
    this.updateLinks(this._router.url);
  }

  ngOnInit(): void {
    this._subscription = this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(result => {
        const navEnd = result as NavigationEnd;
        this.updateLinks(navEnd.url);
      });
  }

  ngOnDestroy(): void {
    if (this._subscription) { this._subscription.unsubscribe(); }
  }

  public leftClick(): void {
    var leftRoute = this._routeManager.leftRoute(this._currentUrl);
    this.navigate(leftRoute);
  }

  public rightClick(): void {
    var rightRoute = this._routeManager.rightRoute(this._currentUrl);
    this.navigate(rightRoute);
  }

  private navigate(route: string) {
    if (route) {
      this._router.navigate([route]);
    }
  }

  private updateLinks(currentUrl: string) {
    if (!currentUrl) { return; }

    this._currentUrl = currentUrl;

    this.canMoveLeft = this._routeManager.canMoveLeft(currentUrl);
    this.canMoveRight = this._routeManager.canMoveRight(currentUrl);
  }

}
