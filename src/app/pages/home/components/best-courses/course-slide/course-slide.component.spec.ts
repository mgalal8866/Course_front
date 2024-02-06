import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSlideComponent } from './course-slide.component';

describe('CourseSlideComponent', () => {
  let component: CourseSlideComponent;
  let fixture: ComponentFixture<CourseSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CourseSlideComponent]
    });
    fixture = TestBed.createComponent(CourseSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
