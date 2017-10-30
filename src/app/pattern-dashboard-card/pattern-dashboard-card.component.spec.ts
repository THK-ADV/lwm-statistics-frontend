import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternDashboardCardComponent } from './pattern-dashboard-card.component';

describe('PatternDashboardCardComponent', () => {
  let component: PatternDashboardCardComponent;
  let fixture: ComponentFixture<PatternDashboardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternDashboardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternDashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
