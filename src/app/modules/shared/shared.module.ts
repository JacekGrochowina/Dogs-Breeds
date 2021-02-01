import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TranslocoRootModule } from 'src/app/transloco/transloco-root.module';

const SharedComponents = [
  HeaderComponent,
  FooterComponent,
  SidenavComponent,
]

@NgModule({
  declarations: [SharedComponents],
  imports: [
    CommonModule,
    RouterModule,
    TranslocoRootModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [SharedComponents]
})
export class SharedModule { }
