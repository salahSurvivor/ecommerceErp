import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayProfitsComponent } from './day-profits.component';

describe('DayProfitsComponent', () => {
  let component: DayProfitsComponent;
  let fixture: ComponentFixture<DayProfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayProfitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayProfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
