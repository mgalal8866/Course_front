import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const API_TOKEN = "TESTPOSTMAN";
        req = req.clone({
            headers: req.headers.set('api-token', API_TOKEN),
        });        
        return next.handle(req);
    }
}