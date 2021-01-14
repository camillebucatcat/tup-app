import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { Config } from './config';

@Injectable()
export class Helpers {

    constructor(private router: Router, private loadingController: LoadingController, private alertController: AlertController, private config: Config) {

    }

    async presentLoading(message: string = '') {
        const loading = await this.loadingController.create({
            message: message || 'Please wait...',
            mode: 'ios'
        });
        loading.present();
        return loading
    }

    async presentAlert(message: string, header: string = '', options: any = {}) {
        return new Promise((resolve, reject) => {
            const alert = this.alertController.create({
                message, header, buttons: [{
                    text: 'Ok',
                    handler: () => {
                        resolve()
                    }
                }], ...options
            });
            alert.then((modal) => {
                modal.present()
            })
        })
    }
}