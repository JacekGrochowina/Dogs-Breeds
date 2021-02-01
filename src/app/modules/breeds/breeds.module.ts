import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsComponent } from './breeds.component';
import { SharedModule } from '../shared/shared.module';
import { BreedsFacade } from './+state/breeds.facade';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoRootModule } from 'src/app/transloco/transloco-root.module';

@NgModule({
  declarations: [BreedsComponent],
  imports: [
    CommonModule,
    BreedsRoutingModule,
    TranslocoRootModule,
    SharedModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [BreedsFacade]
})
export class BreedsModule { }
