import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FeedCommentComponent } from 'src/app/components/modal/feed-comment/feed-comment.component';
import { Config } from 'src/services/config';
import { api } from 'src/services/vars';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public posts: any = []
  public loading: boolean = true
  constructor(public modalController: ModalController, public http: HttpClient, private config: Config, public navController: NavController) {

  }

  ngOnInit() {
  }

  async presentComment(post) {
    const modal = await this.modalController.create({
      component: FeedCommentComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: { post },
    });
    return await modal.present();
  }

  ionViewDidEnter() {
    this.loadPosts()
  }

  loadPosts() {
    this.config.get('session').then((session: any) => {
      console.log(session)
      let token = session.token
      let headers = new HttpHeaders
      headers = headers.append('Authorization', 'Bearer ' + token.access_token)
      headers = headers.append('Accept', 'application/json')

      this.http.get(api.user.feed, { headers }).toPromise().then((response: any) => {
        this.posts = response.data.posts
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
