import { Component } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GeneralInputComponent } from 'src/app/shared/components/inputs/general-input/general-input.component';
import { SharedButtonComponent } from 'src/app/shared/components/shared-button/shared-button.component';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    GeneralInputComponent,
    SharedButtonComponent
  ]
})
export class PercentageComponent {
  isSubmitted = false;



  getControlErrors(controlName: string): ValidationErrors | null {
    // return this.loginForm.controls[controlName].errors;
    return null;
  }
}
