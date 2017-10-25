import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatternDialogComponent } from './add-pattern-dialog.component';

describe('AddPatternDialogComponent', () => {
  let component: AddPatternDialogComponent;
  let fixture: ComponentFixture<AddPatternDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatternDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatternDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
