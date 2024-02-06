import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneNumberService } from '../../services/phone-number.service';
import { GeneralInputComponent } from 'src/app/shared/components/inputs/general-input/general-input.component';
import { AuthButtonComponent } from '../shared/auth-button/auth-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [
    GeneralInputComponent,
    ReactiveFormsModule,
    AuthButtonComponent,
    TranslateModule
  ],

})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  isSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private phoneNumberService: PhoneNumberService
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    });
  }

  getControlErrors(controlName: string): ValidationErrors | null {
    return this.forgotPasswordForm.controls[controlName].errors;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.forgotPasswordForm.valid) {
      this.router.navigate(['/auth/code-verification'])
      this.phoneNumberService.phoneNumber = this.forgotPasswordForm.value.phone;
    }
  }
}
