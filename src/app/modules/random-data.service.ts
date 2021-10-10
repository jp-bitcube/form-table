import { Injectable } from '@angular/core';
import { RandomData } from './random-table-page/random-table-page.component';
import { randomData } from './random-data';
import { Observable, of } from 'rxjs';


export interface ShowSuccessErrorOptions {
  message: string;
  type: string;
  isError?: boolean;
  message2?: string;
  showAnchor?: boolean;
  buttons: {name: string, click: () => void, class: string}[];
}

@Injectable({
    providedIn: 'root'
})

export class RandomDataService {
    public randomData = randomData;

    getRandomData(): Observable<RandomData[]> {
      return of(this.randomData);
    }

    updateRandomData(data: RandomData): void {
      const matchedIndex = this.randomData.map((obj) => obj.id).indexOf(data.id);

      if (matchedIndex !== -1) {
          this.randomData[matchedIndex] = data;
      }
    }
}
