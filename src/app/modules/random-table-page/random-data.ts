import { RandomData } from "./random-table-page.component";

export const randomData: RandomData[] = [
  {
    productName: 'Product 1',
    stockIn: 20,
    stockOut: 3,
    updatedAt: randomDate(new Date(2021, 6, 1), new Date()),
  }, {
    productName: 'Product 2',
    stockIn: 10,
    stockOut: 5,
    updatedAt: randomDate(new Date(2021, 6, 1), new Date()),
  }, {
    productName: 'Product 3',
    stockIn: 10,
    stockOut: 10,
    updatedAt: randomDate(new Date(2021, 6, 1), new Date()),
  }
];

function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
