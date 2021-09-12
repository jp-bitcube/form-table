import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTableFormEditComponent } from './random-table-form-edit.component';

describe('RandomTableFormEditComponent', () => {
  let component: RandomTableFormEditComponent;
  let fixture: ComponentFixture<RandomTableFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTableFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTableFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
