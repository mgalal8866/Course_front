import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { pagesData } from './components/shared/PagesData';
import { Observable, Subscription, filter } from 'rxjs';
import { PhoneNumberService } from './services/phone-number.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    TranslateModule
  ]
})
export class AuthComponent implements OnInit, OnDestroy {
  currentPage!: any;
  subscriptions: Subscription[] = [];
  phoneNumber: Observable<string | null> = this.phoneNumberService.phoneNumber;
  
  constructor(
    private router: Router,
    private phoneNumberService: PhoneNumberService
  ) { }

  ngOnInit(): void {
    this.currentPage = this.findPage(this.router.url);

    const subscription = this.router.events
      .subscribe((event: any) => {
        if (event?.routerEvent?.url === '/auth')
          this.router.navigate(['/auth/login']);

        this.currentPage = this.findPage(event?.routerEvent?.url);
        if (this.currentPage === '/auth') this.router.navigate(['/auth/login']);
      });

    this.subscriptions.push(subscription);
  }

  findPage(url: string) {
    return pagesData.find((page) => page.url == url);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
