import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  AbstractControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { GeneralInputComponent } from 'src/app/shared/components/inputs/general-input/general-input.component';
import { AuthButtonComponent } from '../shared/auth-button/auth-button.component';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
  standalone: true,
  imports: [
    GeneralInputComponent,
    AuthButtonComponent,
    ReactiveFormsModule,
    TranslateModule
  ],
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm!: FormGroup;
  isSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private autService: AuthService
  ) { }

  ngOnInit(): void {
    this.newPasswordForm = this.fb.group(
      {
        new_password: [
          '',
          [
            Validators.required,
            this.minLength,
            this.hasLowerCaseValidator,
            this.hasUpperCaseValidator,
            this.hasSpecialCharacter,
            this.hasNumber,
          ],
        ],
        confirm_new_password: ['', Validators.required],
      },
      { validators: this.confirmPasswordValidator }
    );
  }

  getControlErrors(controlName: string): ValidationErrors | null {
    return this.newPasswordForm.controls[controlName].errors;
  }

  getNewPasswordControlErrors(error: string) {
    const errors = this.newPasswordForm.get('new_password')?.errors;
    if (errors) return errors[error];
  }

  constructNewPasswordDto() {
    const email = localStorage.getItem('email');
    const old_password = localStorage.getItem('password');
    const body = {
      email: email,
      old_password: old_password,
      password: this.newPasswordForm.get('new_password')!.value,
      password_confirmation: this.newPasswordForm.get('confirm_new_password')!.value,
    };

    return body;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.newPasswordForm.valid) {
      const body = this.constructNewPasswordDto();
      this.autService.changeDefaultPassword(body).subscribe((res) => {

      })
    }
  }

  hasUpperCaseValidator(control: FormControl) {
    if (
      control.value != null &&
      control.value === control.value.toLowerCase()
    ) {
      return { upperCase: true };
    }

    return null;
  }

  hasLowerCaseValidator(control: FormControl) {
    if (control.value != null && control.value === control.value.toUpperCase())
      return { lowerCase: true };

    return null;
  }

  hasSpecialCharacter(control: FormControl) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (control.value != null && !specialChars.test(control.value))
      return { specialCharacter: true };

    return null;
  }

  hasNumber(control: FormControl) {
    if (control.value != null && !/\d/.test(control.value))
      return { hasNumber: true };

    return null;
  }

  minLength(control: FormControl) {
    if (control.value.length < 8) return { minLength: true };
    return null;
  }

  confirmPasswordValidator(control: AbstractControl) {
    return control.value.new_password === control.value.confirm_new_password
      ? null
      : { passwordsNotMatched: true };
  }

  getPasswordMismatchError() {
    return this.newPasswordForm?.errors
      ? this.newPasswordForm.errors['passwordsNotMatched']
      : null;
  }
}
