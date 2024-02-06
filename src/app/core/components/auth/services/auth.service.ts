import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }


  isAuthenticated(){
    return !! localStorage.getItem('token');
  }

  login(body: any) {
    const url = `/api/login`
    return this.http.post<any>(url, body)
  }

  changeDefaultPassword(body: any) {
    const url = `/api/password/change-default-password`
    return this.http.post<any>(url, body)
  }

}