import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatTableModule
  ],
  exports: [
    TableComponent,
    MatTableModule
  ]
})
export class TableModule { }
