import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceEntryComponent } from './add-resource-entry.component';

describe('AddResourceEntryComponent', () => {
  let component: AddResourceEntryComponent;
  let fixture: ComponentFixture<AddResourceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResourceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResourceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
