import { Component, OnInit, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AppTable } from 'src/app/components/table/table.interface';
import { randomData } from '../random-data';
import { RandomDataService } from '../random-data.service';

export interface RandomData {
  id: number;
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

  constructor(private randomDataService: RandomDataService) {}

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

    this.randomDataService.getRandomData().subscribe((data) => {
      this.table.rows =
      data.map(row => ({
          ...row,
      }));
    });

    this.randomDataService.updateRandomData({...randomData[0], stockOut: 8});
  }
}

