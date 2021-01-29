import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubbreedComponent } from './subbreed.component';

const routes: Routes = [{ path: '', component: SubbreedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubbreedRoutingModule { }
