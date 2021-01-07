import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmploymentInformationPageRoutingModule } from './employment-information-routing.module';

import { EmploymentInformationPage } from './employment-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmploymentInformationPageRoutingModule
  ],
  declarations: [EmploymentInformationPage]
})
export class EmploymentInformationPageModule {}
