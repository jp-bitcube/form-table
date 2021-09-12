import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RandomTablePageComponent } from './random-table-page.component';
import { TableModule } from 'src/app/components/table/table.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    RandomTablePageComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    TableModule
  ],
  exports: []
})
export class RandomTablePageModule { }
