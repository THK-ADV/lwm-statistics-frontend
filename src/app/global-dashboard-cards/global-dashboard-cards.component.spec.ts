import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDashboardCardsComponent } from './global-dashboard-cards.component';

describe('GlobalDashboardCardsComponent', () => {
  let component: GlobalDashboardCardsComponent;
  let fixture: ComponentFixture<GlobalDashboardCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalDashboardCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalDashboardCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
