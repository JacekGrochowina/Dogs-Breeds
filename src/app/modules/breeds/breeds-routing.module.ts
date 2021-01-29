import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedsComponent } from './breeds.component';
import { SubbreedComponent } from './subbreed/subbreed.component';

const routes: Routes = [{ path: '', component: BreedsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedsRoutingModule { }
