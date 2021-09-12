import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTablePageComponent } from './random-table-page.component';

describe('RandomTablePageComponent', () => {
  let component: RandomTablePageComponent;
  let fixture: ComponentFixture<RandomTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
