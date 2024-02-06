import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmonialCardComponent } from './testmonial-card.component';

describe('TestmonialCardComponent', () => {
  let component: TestmonialCardComponent;
  let fixture: ComponentFixture<TestmonialCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestmonialCardComponent]
    });
    fixture = TestBed.createComponent(TestmonialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
