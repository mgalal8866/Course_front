import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the token from storage
        const token = localStorage.getItem('token');

        // Clone the request and add the token as an Authorization header
        if (token) {
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`),
            });
        }

        return next.handle(req);
    }
}