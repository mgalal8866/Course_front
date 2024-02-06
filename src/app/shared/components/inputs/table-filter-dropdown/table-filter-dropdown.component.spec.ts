import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterDropdownComponent } from './table-filter-dropdown.component';

describe('TableFilterDropdownComponent', () => {
  let component: TableFilterDropdownComponent;
  let fixture: ComponentFixture<TableFilterDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableFilterDropdownComponent]
    });
    fixture = TestBed.createComponent(TableFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
