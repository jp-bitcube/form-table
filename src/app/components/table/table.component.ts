import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AppTable, AppTableHeader, AppTableRow } from './table.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() options: AppTable<unknown>;
  @Input() rows: Array<AppTableRow<unknown>>;

  dataSource: MatTableDataSource<unknown>;
  displayedColumns: string[];


  ngOnInit(): void {
    if (this.options) {
      this.buildHeaders();
      this.dataSource = new MatTableDataSource(this.options.rows);
    }
  }

  buildHeaders(): void {
    this.displayedColumns = this.options.headers.map((x: AppTableHeader<{[key: string]: string}>) => x.key.toString());
  }

  getValue(header: AppTableHeader<unknown>, row: unknown): string | number | Date {
    return header.get ? header.get(row) : row[header.key];
  }
}
