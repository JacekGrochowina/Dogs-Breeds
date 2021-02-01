import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedsComponent } from './breeds.component';

const routes: Routes = [
  {
    path: '',
    component: BreedsComponent
  },
  {
    path: 'breed/:breed',
    loadChildren: () => import('./subbreed/subbreed.module').then(m => m.SubbreedModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedsRoutingModule { }
