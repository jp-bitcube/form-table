import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RandomTablePageComponent } from './random-table-page/random-table-page.component';
import { TableModule } from 'src/app/components/table/table.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RandomTableFormEditComponent } from './random-table-form-edit/random-table-form-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RandomTablePageComponent,
    RandomTableFormEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    TableModule
  ],
  exports: []
})
export class RandomTablePageModule { }
