import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartElementDetailComponent } from './chart-element-detail.component';

describe('ChartElementDetailComponent', () => {
  let component: ChartElementDetailComponent;
  let fixture: ComponentFixture<ChartElementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartElementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartElementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
