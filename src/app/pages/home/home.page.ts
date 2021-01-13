import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedCommentComponent } from 'src/app/components/modal/feed-comment/feed-comment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public modalController: ModalController) {

  }

  ngOnInit() {
  }

  async presentComent() {
    const modal = await this.modalController.create({
      component: FeedCommentComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true
    });
    return await modal.present();
  }

}
