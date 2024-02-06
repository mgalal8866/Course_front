import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAbilitiesComponent } from './general-abilities.component';

describe('GeneralAbilitiesComponent', () => {
  let component: GeneralAbilitiesComponent;
  let fixture: ComponentFixture<GeneralAbilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralAbilitiesComponent]
    });
    fixture = TestBed.createComponent(GeneralAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
