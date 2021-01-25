import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsComponent } from './breeds.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BreedsComponent],
  imports: [
    CommonModule,
    BreedsRoutingModule,
    SharedModule,
  ]
})
export class BreedsModule { }
