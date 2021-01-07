import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploymentInformationPage } from './employment-information.page';

const routes: Routes = [
  {
    path: '',
    component: EmploymentInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploymentInformationPageRoutingModule {}
