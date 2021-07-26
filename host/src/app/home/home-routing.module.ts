import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'feature1',
        loadChildren: () => import('remote1/Feature1Module').then(m => m.Feature1Module)
      },
      {
        path: 'feature2',
        loadChildren: () => import('remote2/Feature2Module').then(m => m.Feature2Module)
      },
      {
        path: 'feature2/:user',
        loadChildren: () => import('remote2/Feature2Module').then(m => m.Feature2Module)
      },
      {
        path: 'feature3/:user',
        loadChildren: () => import('remote3/Feature3Module').then(m => m.Feature3Module)
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
