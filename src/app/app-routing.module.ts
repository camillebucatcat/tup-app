import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then(m => m.LogoutPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'id-number',
    loadChildren: () => import('./pages/registration/id-number/id-number.module').then(m => m.IdNumberPageModule)
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./pages/registration/personal-information/personal-information.module').then(m => m.PersonalInformationPageModule)
  },
  {
    path: 'employment-information',
    loadChildren: () => import('./pages/registration/employment-information/employment-information.module').then(m => m.EmploymentInformationPageModule)
  },
  {
    path: 'setup-password',
    loadChildren: () => import('./pages/registration/setup-password/setup-password.module').then(m => m.SetupPasswordPageModule)
  },
  {
    path: 'upload-document',
    loadChildren: () => import('./pages/registration/upload-document/upload-document.module').then(m => m.UploadDocumentPageModule)
  },
  {
    path: 'terms-condition',
    loadChildren: () => import('./pages/registration/terms-condition/terms-condition.module').then(m => m.TermsConditionPageModule)
  },
  {
    path: 'review-information',
    loadChildren: () => import('./pages/registration/review-information/review-information.module').then(m => m.ReviewInformationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'announcement',
    loadChildren: () => import('./pages/announcement/announcement.module').then(m => m.AnnouncementPageModule)
  },
  {
    path: 'poll',
    loadChildren: () => import('./pages/poll/poll.module').then(m => m.PollPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then(m => m.EventPageModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./pages/job/job.module').then(m => m.JobPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
