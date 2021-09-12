import { Component, OnInit } from '@angular/core';
import { AppTable } from 'src/app/components/table/table.interface';
import { randomData } from '../random-data';
import { RandomDataService } from '../random-data.service';
import { RandomData } from '../random-table-page/random-table-page.component';

@Component({
  templateUrl: './random-table-form-edit.component.html',
  styleUrls: ['./random-table-form-edit.component.scss']
})
export class RandomTableFormEditComponent implements OnInit {
  table: AppTable<RandomData>;

  constructor(private randomDataService: RandomDataService) { }

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
  }
}
