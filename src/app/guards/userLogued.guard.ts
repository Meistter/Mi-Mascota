import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserLogedGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){}


canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authService.hasUser()
      .pipe(
        map(user => user === null ? false : true),
        tap(hasUser => {
          if (!hasUser) {this.router.navigate(['/auth/login'], { queryParams: { query: 'message' } })} 
        })
      )
  }
}
