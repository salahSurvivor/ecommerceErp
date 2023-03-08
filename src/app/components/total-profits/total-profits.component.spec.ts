import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProfitsComponent } from './total-profits.component';

describe('TotalProfitsComponent', () => {
  let component: TotalProfitsComponent;
  let fixture: ComponentFixture<TotalProfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalProfitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalProfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
