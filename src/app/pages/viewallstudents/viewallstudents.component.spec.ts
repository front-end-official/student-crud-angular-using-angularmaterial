import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallstudentsComponent } from './viewallstudents.component';

describe('ViewallstudentsComponent', () => {
  let component: ViewallstudentsComponent;
  let fixture: ComponentFixture<ViewallstudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallstudentsComponent]
    });
    fixture = TestBed.createComponent(ViewallstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
