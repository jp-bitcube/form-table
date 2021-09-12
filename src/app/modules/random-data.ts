import { RandomData } from "./random-table-page/random-table-page.component";

export const randomData: RandomData[] = [
  {
    id: 1,
    productName: 'Product 1',
    stockIn: 20,
    stockOut: 3,
    updatedAt: randomDate(new Date(2021, 6, 1), new Date()),
  }, {
    id: 2,
    productName: 'Product 2',
    stockIn: 10,
    stockOut: 5,
    updatedAt: randomDate(new Date(2021, 6, 1), new Date()),
  }, {
    id: 3,
    productName: 'Product 3',
    stockIn: 10,
    stockOut: 10,
    updatedAt: randomDate(new Date(2021, 6, 1), new Date()),
  }
];

function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
