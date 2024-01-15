import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewonestudentComponent } from './viewonestudent.component';

describe('ViewonestudentComponent', () => {
  let component: ViewonestudentComponent;
  let fixture: ComponentFixture<ViewonestudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewonestudentComponent]
    });
    fixture = TestBed.createComponent(ViewonestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
