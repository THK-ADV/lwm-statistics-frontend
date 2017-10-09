import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailEntryComponent } from './add-detail-entry.component';

describe('AddDetailEntryComponent', () => {
  let component: AddDetailEntryComponent;
  let fixture: ComponentFixture<AddDetailEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
