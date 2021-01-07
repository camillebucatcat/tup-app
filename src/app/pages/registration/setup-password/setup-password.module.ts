import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupPasswordPageRoutingModule } from './setup-password-routing.module';

import { SetupPasswordPage } from './setup-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupPasswordPageRoutingModule
  ],
  declarations: [SetupPasswordPage]
})
export class SetupPasswordPageModule {}
