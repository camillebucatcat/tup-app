import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewInformationPage } from './review-information.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewInformationPageRoutingModule {}
