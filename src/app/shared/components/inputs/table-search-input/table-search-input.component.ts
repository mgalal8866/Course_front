import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, forwardRef } from '@angular/core';
import {

  FormsModule,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { ValidationErrorsComponent } from '../../validation-errors/validation-errors.component';
@Component({
  selector: 'app-table-search-input',
  templateUrl: './table-search-input.component.html',
  styleUrls: ['./table-search-input.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TableSearchInputComponent),
      multi: true,
    },
  ],
  imports: [CommonModule, FormsModule, ValidationErrorsComponent]
})
export class TableSearchInputComponent {

  searchTerm: string | undefined;
  @Input() placeholder!: string;

  onSearchChange() {
    if (this.searchTerm!.length >= 3) {
      //YODO Call the backend API to perform the search

    }
  }

}

