import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Config } from 'src/services/config';
import { api } from 'src/services/vars';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.page.html',
  styleUrls: ['./poll.page.scss'],
})
export class PollPage implements OnInit {

  public polls: any = []
  public loading: boolean = true

  constructor(public http: HttpClient, private config: Config, public navController: NavController) { }

  ngOnInit() {
  }


  ionViewDidEnter() {
    this.loadPolls()
  }

  loadPolls() {
    this.config.get('session').then((session: any) => {
      console.log(session)
      let token = session.token
      let headers = new HttpHeaders
      headers = headers.append('Authorization', 'Bearer ' + token.access_token)
      headers = headers.append('Accept', 'application/json')

      this.http.get(api.user.poll, { headers }).toPromise().then((response: any) => {
        this.polls = response.data
        this.loading = false
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
