import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testmonial-card',
  standalone: true,
  templateUrl: './testmonial-card.component.html',
  styleUrls: ['./testmonial-card.component.scss'],
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslateModule
  ],
})
export class TestmonialCardComponent {

  @Input() user!: any;
}
