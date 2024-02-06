import { Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { navLinks } from './NavLinks';
import { MatMenuModule } from '@angular/material/menu';
import { SearchBoxComponent } from './search-box/search-box.component';
import { LanguageComponent } from './language/language.component';
import { SharedButtonComponent } from 'src/app/shared/components/shared-button/shared-button.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    RouterModule,
    FooterComponent,
    NgOptimizedImage,
    TranslateModule,
    MatMenuModule,
    SearchBoxComponent,
    LanguageComponent,
    SharedButtonComponent,
  ]
})
export class NavComponent {
  htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
  dir = localStorage.getItem('dir') || 'rtl';
  navItems = navLinks;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 1340px)')
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    
  }

  changeLangage(lang: string) {
    this.dir = this.htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.htmlTag.lang = lang;
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    localStorage.setItem('dir', this.dir)
  }
}
