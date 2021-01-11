import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
          }
        ]
      },
      {
        path: 'announcement',
        children: [
          {
            path: '',
            loadChildren: () => import('../announcement/announcement.module').then(m => m.AnnouncementPageModule),
          }
        ]
      },
      {
        path: 'poll',
        children: [
          {
            path: '',
            loadChildren: () => import('../poll/poll.module').then(m => m.PollPageModule)
          }
        ]
      },
      {
        path: 'event',
        children: [
          {
            path: '',
            loadChildren: () => import('../event/event.module').then(m => m.EventPageModule)
          }
        ]
      },
      {
        path: 'job',
        children: [
          {
            path: '',
            loadChildren: () => import('../job/job.module').then(m => m.JobPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
