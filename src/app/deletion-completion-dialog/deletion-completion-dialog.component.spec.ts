import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletionCompletionDialogComponent } from './deletion-completion-dialog.component';

describe('DeletionCompletionDialogComponent', () => {
  let component: DeletionCompletionDialogComponent;
  let fixture: ComponentFixture<DeletionCompletionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletionCompletionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletionCompletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
