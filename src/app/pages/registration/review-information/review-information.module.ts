import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewInformationPageRoutingModule } from './review-information-routing.module';

import { ReviewInformationPage } from './review-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewInformationPageRoutingModule
  ],
  declarations: [ReviewInformationPage]
})
export class ReviewInformationPageModule {}
