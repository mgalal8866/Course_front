import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getArticlesData() {
    return this.http.get<any>(`${this.baseUrl}/home/section6`).pipe(map(res => res.data));
  }
}
