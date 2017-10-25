import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueDialogComponent } from './add-value-dialog.component';

describe('AddValueDialogComponent', () => {
  let component: AddValueDialogComponent;
  let fixture: ComponentFixture<AddValueDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
