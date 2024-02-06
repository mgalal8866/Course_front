import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getFaqData(){
    return this.http.get<any>(`${this.baseUrl}/home/section7`).pipe(map(res => res.data));
  }

}
