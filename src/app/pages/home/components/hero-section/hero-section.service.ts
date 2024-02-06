import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HerosectionService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getHeroSectionData() {
    return this.http.get<any>(`${this.baseUrl}/home/section1`).pipe(map(res => res.data));
  }
}
