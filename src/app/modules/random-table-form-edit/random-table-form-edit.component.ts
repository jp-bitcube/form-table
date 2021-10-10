import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppTable, AppTableRow } from 'src/app/components/table/table.interface';
import { RandomDataService } from '../random-data.service';
import { RandomData } from '../random-table-page/random-table-page.component';

@Component({
  templateUrl: './random-table-form-edit.component.html',
  styleUrls: ['./random-table-form-edit.component.scss']
})
export class RandomTableFormEditComponent implements OnInit {
  table: AppTable<RandomData>;
  stockIn: FormControl;
  stockOut: FormControl;


  constructor(
    private location: Location,
    private randomDataService: RandomDataService
    ) { }

  ngOnInit(): void {
    this.table = {
      tableType: 'Edit',
      headers: [{
        key: 'productName',
        label: 'Name',
      }, {
        key: 'stockIn',
        type: 'input',
        inputType: 'number',
        label: 'Stock In',
        required: true,
        get: (row: RandomData) => row.stockIn,
      }, {
        key: 'stockOut',
        type: 'input',
        inputType: 'number',
        label: 'Stock Out',
        required: true,
        get: (row: RandomData) => row.stockOut,
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

  onSavedChanges(event: AppTableRow<RandomData>[]): void {
    const result = Object.keys(event).map((key, index) => {
      const splitKey = key.split('_');
      const valueKey = splitKey[0];
      const idKey = splitKey[1];
      return {
        ...this.table.rows[index],
        id: +idKey,
        [valueKey]: event[key]
      };
    }) as RandomData[];

    this.joinObject(result).forEach((r) => this.randomDataService.updateRandomData(r));
    this.location.back();
  }

  joinObject(result: RandomData[]): RandomData[] {
    return result.reduce((acc: RandomData[], val: RandomData, ind: number) => {
       const index = acc.findIndex(el => el.id === val.id);
       if (index !== -1) {
          const key = Object.keys(val)[1];
          acc[index][key] = val[key];
       } else {
          acc.push(val);
       }
       return acc;
    }, []);
  }
}
