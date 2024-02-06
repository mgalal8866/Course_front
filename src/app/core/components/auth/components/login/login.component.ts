import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthButtonComponent } from '../shared/auth-button/auth-button.component';
import { GeneralInputComponent } from 'src/app/shared/components/inputs/general-input/general-input.component';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    AuthButtonComponent,
    GeneralInputComponent,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  getControlErrors(controlName: string): ValidationErrors | null {
    return this.loginForm.controls[controlName].errors;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {

      this.authService.login(this.loginForm.value).subscribe((res) => {

        if(res.change_password_required){
          localStorage.setItem('email',this.loginForm.value.email)
          localStorage.setItem('password',this.loginForm.value.password)
          this.router.navigate(['/new-password']);
        }else{
          localStorage.setItem('token', res.data.token);
          this.router.navigate(['/dashboard']);
        }
      });
      // this.snackBar.openFromComponent(DangerComponent, {
      //   horizontalPosition: 'right',
      //   verticalPosition: 'top',
      // })
    }
  }
}
