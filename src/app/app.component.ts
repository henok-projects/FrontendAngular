import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { TitleResolverService } from './core/services/Route-title/title-resolver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private titleResolverService: TitleResolverService
  ) {
    this._router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => this.titleResolverService.getRouterPageTitle(this._route))
      )
      .subscribe((pageTitle) => {
        titleResolverService.getRouterPageTitle(pageTitle);
      });
  }
}
