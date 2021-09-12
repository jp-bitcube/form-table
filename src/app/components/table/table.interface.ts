export class AppTableHeader<T> {
  key: Extract<keyof T, string>;
  label: string;
  type?: 'date';
  get?: (row: T) => any;

  constructor(options: AppTableHeader<T>) {
    this.key = options.key;
    this.label = options.label;
    this.type = options.type;
  }
}


export interface AppTable<T> {
  headers: AppTableHeader<T>[];
  rows?: AppTableRow<T>[];
}

export type AppTableRow<T> = T;
