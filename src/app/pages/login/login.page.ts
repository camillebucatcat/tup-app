import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { api } from 'src/services/vars';
import { Config } from 'src/services/config';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public form = {
    username: '',
    password: ''
  }
  constructor(public http: HttpClient, private config: Config, public navController: NavController) { }

  ngOnInit() {
  }

  login(e) {
    e.preventDefault()

    this.http.post(api.login, {
      client_id: '2',
      client_secret: 'W1ERGV2h9PEQq4gN6KOxq5VgNm4YsLlsdwx1AjMo',
      grant_type: 'password',
      username: this.form.username,
      password: this.form.password,
      scope: '*',
    }).toPromise().then((token: any) => {
      let headers = new HttpHeaders
      headers = headers.append('Authorization', 'Bearer ' + token.access_token)
      headers = headers.append('Accept', 'application/json')

      this.http.get(api.me, { headers }).toPromise().then((user: any) => {
        this.config.set('session', {
          user,
          token
        }).then(() => {
          this.navController.navigateRoot(['tabs']);
        })
      }).catch(() => {
        alert('invalid credentials')
      })
    }).catch((request) => {
      if (typeof request.error != "undefined" && (request.error.error == "invalid_grant" || request.error.error == "invalid_request")) {
        alert('invalid credentials')
      }
    })
  }

}
