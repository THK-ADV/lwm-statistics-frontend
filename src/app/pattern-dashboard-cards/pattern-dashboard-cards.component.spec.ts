import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternDashboardCardsComponent } from './pattern-dashboard-cards.component';

describe('PatternDashboardCardsComponent', () => {
  let component: PatternDashboardCardsComponent;
  let fixture: ComponentFixture<PatternDashboardCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternDashboardCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternDashboardCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
