import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';

import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { SettingsFacade } from './+state/settings.facade';
import { TranslocoRootModule } from 'src/app/transloco/transloco-root.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslocoRootModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
  ],
  providers: [SettingsFacade]
})
export class SettingsModule { }
