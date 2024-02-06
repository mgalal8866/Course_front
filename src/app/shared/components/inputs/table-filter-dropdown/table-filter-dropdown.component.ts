import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { GeneralInputsAccessor } from 'src/app/shared/classes/GeneralInputsAccessor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-filter-dropdown',
  templateUrl: './table-filter-dropdown.component.html',
  styleUrls: ['./table-filter-dropdown.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TableFilterDropdownComponent),
      multi: true,
    },
  ],
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, CommonModule, MatInputModule],
})
export class TableFilterDropdownComponent extends GeneralInputsAccessor {
  selectedValue: string | undefined;
  selectedCar: string | undefined;

  @Input() placeholder!: string;
  @Input() items!: any[]; //YODO add interface of array type 

  @Input() icon!: string;
  @Input() label!: string;
  @Output() valueEmitted = new EventEmitter();

  selectionChange(event: any) {
    this.valueEmitted.emit(event.value)
  }
}