import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { CodeVerificationComponent } from './components/code-verification/code-verification.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { SignupComponent } from './components/signup/signup.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'code-verification',
        component: CodeVerificationComponent,
      },
      {
        path: 'new-password',
        component: NewPasswordComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ]
  }

];

