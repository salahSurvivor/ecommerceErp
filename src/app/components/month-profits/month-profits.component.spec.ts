import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthProfitsComponent } from './month-profits.component';

describe('MonthProfitsComponent', () => {
  let component: MonthProfitsComponent;
  let fixture: ComponentFixture<MonthProfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthProfitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthProfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
