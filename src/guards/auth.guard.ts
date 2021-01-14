import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Config } from 'src/services/config';
import { SESSION_TIMEOUT } from 'src/services/vars';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private navController: NavController, public config: Config) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.config.get('session').then((session) => {
      if (session.user) {
        if (session.expiry <= +new Date) {
          if (next.url[0].path != "login") {
            if (next.url[0].path != "logout") {
              this.navController.navigateRoot(['logout']);
            } else {
              return true
            }
          }
        } else {
          let after5mins = new Date;
          after5mins.setMinutes(after5mins.getMinutes() + SESSION_TIMEOUT);
          session.expiry = +(after5mins)
          this.config.set('session', session).then(() => {
            if (next.url[0].path == "login") {
              this.navController.navigateRoot(['tabs']);
            }
          })
          return true;
        }
      } else if (next.url[0].path != "login") {
        this.navController.navigateRoot(['login']);
        return false
      } else if (next.url[0].path == "login") {
        return true
      }
      return false;
    }).catch(() => {
      if (next.url[0].path == "login") {
        return true
      } else {
        this.navController.navigateRoot(['login']);
        return false;
      }
    });
  }
}
