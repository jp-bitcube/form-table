import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { AppTable, AppTableHeader, AppTableRow } from './table.interface';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnInit {
  @Input() options: AppTable<unknown>;
  @Input() rows: Array<AppTableRow<unknown>>;

  form: FormGroup;
  dataSource: MatTableDataSource<unknown>;
  displayedColumns: string[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.options) {
      this.buildHeaders();
      this.dataSource = new MatTableDataSource(this.options.rows);
    }

    if (this.options?.tableType?.includes('Edit')) {
      this.generateForm(this.options.headers as AppTableHeader<T>[], this.options.rows as AppTableRow<T & { id: number | string }>[]);
    }
  }

  generateForm(headers: AppTableHeader<T>[], rows: AppTableRow<T & { id: number | string }>[]): void {
    this.form = this.formBuilder.group({});
    headers.forEach((header) => {
      if (header?.type?.includes('input')) {
        rows.forEach((row) => {
          const control = this.formBuilder.control(this.getValue(header, row) || null,
          header.required ? [Validators.required] : null);
          this.form.addControl(`${header.key}_${row.id}`, control);
        });
      }
    });
  }

  buildHeaders(): void {
    this.displayedColumns = this.options.headers.map((x: AppTableHeader<{[key: string]: string}>) => x.key);
  }

  getValue(header: AppTableHeader<T>, row: AppTableRow<T>): string | number | Date {
    return header.get ? header.get(row) : row[header.key];
  }
}
