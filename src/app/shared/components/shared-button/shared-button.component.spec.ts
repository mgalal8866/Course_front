import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtonComponent } from './shared-button.component';

describe('SharedButtonComponent', () => {
  let component: SharedButtonComponent;
  let fixture: ComponentFixture<SharedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedButtonComponent]
    });
    fixture = TestBed.createComponent(SharedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
