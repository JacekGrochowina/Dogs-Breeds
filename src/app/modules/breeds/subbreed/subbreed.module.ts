import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubbreedRoutingModule } from './subbreed-routing.module';
import { SubbreedComponent } from './subbreed.component';
import { SharedModule } from '../../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SubbreedComponent],
  imports: [
    CommonModule,
    SubbreedRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class SubbreedModule { }
