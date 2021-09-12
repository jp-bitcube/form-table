import { Component, OnInit, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AppTable } from 'src/app/components/table/table.interface';
import { randomData } from './random-data';

export interface RandomData {
  productName: string;
  stockIn: number;
  stockOut: number;
  updatedAt: Date;
  isActive?: boolean;
  stockLeft?: number;
}

@Component({
  templateUrl: './random-table-page.component.html',
  styleUrls: ['./random-table-page.component.scss']
})
export class RandomTablePageComponent implements OnInit {

  table: AppTable<RandomData>;

  ngOnInit(): void {
    this.table = {
      headers: [{
        key: 'productName',
        label: 'Name',
      }, {
        key: 'stockIn',
        label: 'Stock In',
      }, {
        key: 'stockOut',
        label: 'Stock Out',
      }, {
        key: 'stockLeft',
        label: 'Stock Left',
        get: (row: RandomData) => row.stockIn - row.stockOut,
      }, {
        key: 'isActive',
        label: 'Status',
        get: (row: RandomData) => (row.stockIn - row.stockOut) > 0 ? 'In Stock' : 'Out of Stock'
      }, {
        key: 'updatedAt',
        type: 'date',
        label: 'Modified Date',
      }]
    };


    this.table.rows =
      randomData.map(row => ({
        ...row,
    }));
  }
}

