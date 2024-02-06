import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthButtonComponent } from '../shared/auth-button/auth-button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GeneralInputComponent } from 'src/app/shared/components/inputs/general-input/general-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
  imports: [
    AuthButtonComponent,
    MatCheckboxModule,
    GeneralInputComponent,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule
  ]
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [
        Validators.required,
        this.minLength,
        this.hasLowerCaseValidator,
        this.hasUpperCaseValidator,
        this.hasSpecialCharacter,
        this.hasNumber,
      ]],
      confirm_password: ['', Validators.required],
    }, { validators: this.confirmPasswordValidator }
    );
  }

  getControlErrors(controlName: string): ValidationErrors | null {
    return this.signUpForm.controls[controlName].errors;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.signUpForm.valid) {
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
    return this.signUpForm?.errors
      ? this.signUpForm.errors['passwordsNotMatched']
      : null;
  }
}
