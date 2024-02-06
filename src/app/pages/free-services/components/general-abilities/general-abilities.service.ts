import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralAbilitiesService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getGeneralAbitlitiesData() {
    return this.http.get<any>(`${this.baseUrl}/home/section7`).pipe(map(res => res.data));
  }

  getFreeCategories() {
    return this.http.get<any>(`${this.baseUrl}/category/free/course`).pipe(map(res => res.data));
  }

  getCoursesByCategory(id: string) {
    return this.http.get<any>(`${this.baseUrl}/free/course/bycategory/${id}`).pipe(map(res => res.data));
  }

  GetCourseById(id: string) {
    return this.http.get<any>(`${this.baseUrl}/free/course/${id}`).pipe(map(res => res.data));
  }
}
