import { Component, OnInit } from '@angular/core';
import { Config } from 'src/services/config';
import { Router } from '@angular/router';
import { Helpers } from 'src/services/Helpers';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private config: Config, private router: Router, private helpers: Helpers) { }

  ngOnInit() {
    this.helpers.presentLoading().then((loader) => {
      this.config.remove('session').then(() => {
        this.router.navigate(['login'], { replaceUrl: true }).then(() => {
          loader.dismiss()
        })
      })
    })
  }

}
