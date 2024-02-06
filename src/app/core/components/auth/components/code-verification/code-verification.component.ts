import { Component, OnInit } from '@angular/core';
import { Subscription, take, timer } from 'rxjs';
import { Router } from '@angular/router';
import { AuthButtonComponent } from '../shared/auth-button/auth-button.component';
import { CommonModule } from '@angular/common';
import { GeneralInputComponent } from 'src/app/shared/components/inputs/general-input/general-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.scss'],
  standalone: true,
  imports: [
    AuthButtonComponent,
    CommonModule,
    GeneralInputComponent,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class CodeVerificationComponent implements OnInit {
  countDown!: Subscription;
  counter = 60 * 3;
  tick = 1000;
  disabled = true;
  codeForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.countDownSubscription();

    this.codeForm = this.fb.group({
      code: ['', Validators.required],
    });
  }

  countDownSubscription() {
    this.countDown = timer(0, this.tick)
      .pipe(take(this.counter))
      .subscribe(() => {
        --this.counter;
        if (this.counter == 0) {
          this.countDown.unsubscribe();
          this.disabled = false;
        }
      });
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }

  getControlErrors(controlName: string): ValidationErrors | null {
    return this.codeForm.controls[controlName].errors;
  }

  submit() {
    this.isSubmitted = true;
    if (this.codeForm.valid) this.router.navigate(['/auth/new-password']);
  }
}
