import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'id-number',
    loadChildren: () => import('./pages/registration/id-number/id-number.module').then( m => m.IdNumberPageModule)
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./pages/registration/personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'employment-information',
    loadChildren: () => import('./pages/registration/employment-information/employment-information.module').then( m => m.EmploymentInformationPageModule)
  },
  {
    path: 'setup-password',
    loadChildren: () => import('./pages/registration/setup-password/setup-password.module').then( m => m.SetupPasswordPageModule)
  },
  {
    path: 'upload-document',
    loadChildren: () => import('./pages/registration/upload-document/upload-document.module').then( m => m.UploadDocumentPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
