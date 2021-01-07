import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdNumberPage } from './id-number.page';

const routes: Routes = [
  {
    path: '',
    component: IdNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdNumberPageRoutingModule {}
