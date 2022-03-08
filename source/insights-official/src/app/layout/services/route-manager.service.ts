import { AppRoutesStrings } from './../utilities/app-constants';
import { Injectable } from '@angular/core';
import { ApplicationRouteOrder } from '../utilities/app-constants';

interface IRouteMapping {
  routeName: string;
  url: string;
  fullRoute: string;
}

@Injectable({
  providedIn: 'root'
})
export class RouteManagerService {

  private _urlMap: IRouteMapping[] = null;

  constructor() {
    this.updateUrlMap();
  }

  public canMoveRight(currentUrl: string): boolean {
    const item = this.findRight(currentUrl);
    return !!item;
  }

  public canMoveLeft(currentUrl: string): boolean {
    const item = this.findLeft(currentUrl);
    return !!item;
  }

  public rightRoute(currentUrl: string): string {
    const item = this.findRight(currentUrl);
    if (item) { return item.fullRoute; }
  }

  public leftRoute(currentUrl: string): string {
    const item = this.findLeft(currentUrl);
    if (item) { return item.fullRoute; }
  }

  private findRight(currentUrl: string): IRouteMapping {
    const index = this._urlMap.findIndex(x => x.url === currentUrl);
    if (index > -1 && index < (this._urlMap.length - 1)) { return this._urlMap[index + 1]; }
    if (index == (this._urlMap.length - 1)) { return this._urlMap[0]; }
    return null;
  }

  private findLeft(currentUrl: string): IRouteMapping {
    const index = this._urlMap.findIndex(x => x.url === currentUrl);
    if (index < 0) { return null; }
    if (index == 0) { return this._urlMap[this._urlMap.length - 1]; }
    return this._urlMap[index - 1];
  }

  private updateUrlMap(): void {
    if (this._urlMap) { return; }

    this._urlMap = [];

    ApplicationRouteOrder.forEach(routeName => {

      let fullRoute = `${AppRoutesStrings.main}/${routeName}`;
      if (fullRoute.endsWith('/')) { // for /site
        fullRoute = fullRoute.substring(0, fullRoute.length - 1);
      }

      const mapItem: IRouteMapping = {
        routeName,
        url: `/${fullRoute}`,
        fullRoute,
      };

      this._urlMap.push(mapItem);
    });
  }

}
