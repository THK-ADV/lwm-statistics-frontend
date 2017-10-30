import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDashboardCardComponent } from './small-dashboard-card.component';

describe('SmallDashboardCardComponent', () => {
  let component: SmallDashboardCardComponent;
  let fixture: ComponentFixture<SmallDashboardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallDashboardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallDashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
