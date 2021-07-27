import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { loadRemoteModule } from '@angular-architects/module-federation';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // {
      //   path: 'feature1',
      //   loadChildren: () => import('remote1/Feature1Module').then(m => m.Feature1Module)
      // },
      // {
      //   path: 'feature2',
      //   loadChildren: () => import('remote2/Feature2Module').then(m => m.Feature2Module)
      // },
      // {
      //   path: 'feature2/:user',
      //   loadChildren: () => import('remote2/Feature2Module').then(m => m.Feature2Module)
      // },
      // {
      //   path: 'feature3/:user',
      //   loadChildren: () => import('remote3/Feature3Module').then(m => m.Feature3Module)
      // }
      {
        path: 'feature1',
        loadChildren: () => loadRemoteModule({
          // remoteEntry: 'http://localhost:4300/remote1Entry.js',
          remoteName: 'remote1',
          exposedModule: './Feature1Module'
        }).then(m => m.Feature1Module)
      },
      {
        path: 'feature2',
        loadChildren: () => loadRemoteModule({
          // remoteEntry: 'http://localhost:4400/remote2Entry.js',
          remoteName: 'remote2',
          exposedModule: './Feature2Module'
        }).then(m => m.Feature2Module)
      },
      {
        path: 'feature2/:user',
        loadChildren: () => loadRemoteModule({
          // remoteEntry: 'http://localhost:4400/remote2Entry.js',
          remoteName: 'remote2',
          exposedModule: './Feature2Module'
        }).then(m => m.Feature2Module)
      },
      {
        path: 'feature3/:user',
        loadChildren: () => loadRemoteModule({
          // remoteEntry: 'http://localhost:4500/remote3Entry.js',
          remoteName: 'remote3',
          exposedModule: './Feature3Module'
        }).then(m => m.Feature3Module)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
