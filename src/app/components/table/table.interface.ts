import { FormControl } from '@angular/forms';

export class AppTableHeader<T> {
  key: Extract<keyof T, string>;
  label: string;
  type?: 'date' | 'input';
  get?: (row: T) => any;
  inputType?: string;
  required?: boolean;

  constructor(options: AppTableHeader<T>) {
    this.key = options.key;
    this.label = options.label;
    this.type = options.type;
  }
}

export interface AppTable<T> {
  headers: AppTableHeader<T>[];
  tableType?: string;
  rows?: AppTableRow<T>[];
}

export type AppTableRow<T> = T;
