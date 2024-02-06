import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeServicesComponent } from './free-services.component';

describe('FreeServicesComponent', () => {
  let component: FreeServicesComponent;
  let fixture: ComponentFixture<FreeServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FreeServicesComponent]
    });
    fixture = TestBed.createComponent(FreeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
