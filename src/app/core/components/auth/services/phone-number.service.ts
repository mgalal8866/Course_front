import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  private number = new BehaviorSubject<string | null>(null);
  private number$ = this.number.asObservable();


  set phoneNumber(number: string) {
    this.number.next(number);
  }


  get phoneNumber(): Observable<string | null> {
    return this.number$;
  }

}
