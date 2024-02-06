import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { GeneralInputsAccessor } from 'src/app/shared/classes/GeneralInputsAccessor';
import { ValidationErrorsComponent } from '../../validation-errors/validation-errors.component';

@Component({
  selector: 'app-date-input',
  standalone: true,
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationErrorsComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
})
export class DateInputComponent extends GeneralInputsAccessor {
  @Input() isSubmitted = false;
  @Input() errors!: ValidationErrors | null;
  @Input() placeholder!: string;


}
