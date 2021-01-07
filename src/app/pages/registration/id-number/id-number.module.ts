import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdNumberPageRoutingModule } from './id-number-routing.module';

import { IdNumberPage } from './id-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdNumberPageRoutingModule
  ],
  declarations: [IdNumberPage]
})
export class IdNumberPageModule {}
