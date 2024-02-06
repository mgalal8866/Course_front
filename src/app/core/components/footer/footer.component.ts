import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslateModule
  ]
})
export class FooterComponent implements OnInit{
  footerData!: any;
  constructor(private footerService: FooterService, public translate: TranslateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      
      this.footerService.getFooterData().subscribe(data => {
        this.footerData = data
      })
    }, 100);
  }
}
