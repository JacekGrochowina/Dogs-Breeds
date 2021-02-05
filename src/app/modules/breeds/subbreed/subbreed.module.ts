import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubbreedRoutingModule } from './subbreed-routing.module';
import { SubbreedComponent } from './subbreed.component';
import { SharedModule } from '../../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { SettingsFacade } from '../../settings/+state/settings.facade';
import { SubBreedFacade } from './+state/subbreed.facade';
import { TranslocoRootModule } from 'src/app/transloco/transloco-root.module';

import { StoreModule } from '@ngrx/store';
import { SubBreedReducer } from './+state/subbreed.reducers';

@NgModule({
  declarations: [SubbreedComponent],
  imports: [
    CommonModule,
    SubbreedRoutingModule,
    SharedModule,
    TranslocoRootModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    StoreModule.forFeature('subbreeds', SubBreedReducer)
  ],
  providers: [
    SettingsFacade,
    SubBreedFacade
  ]
})
export class SubbreedModule { }
