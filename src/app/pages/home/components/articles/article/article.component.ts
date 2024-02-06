import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-article',
  standalone: true,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [
    CommonModule,
    NgOptimizedImage,
  TranslateModule
  ],
})
export class ArticleComponent {
  @Input() article: any;
}
