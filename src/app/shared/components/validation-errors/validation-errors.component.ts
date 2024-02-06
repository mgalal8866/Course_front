import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrors } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-validation-errors',
  standalone: true,
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
  imports: [
    CommonModule,
    TranslateModule
  ],
})
export class ValidationErrorsComponent {
  @Input({required: true}) isSubmitted = false;
  @Input({required: true}) errors!: ValidationErrors | null;
  @Input() mismatchError = false;
}
