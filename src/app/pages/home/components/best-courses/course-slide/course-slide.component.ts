import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-course-slide',
  standalone: true,
  templateUrl: './course-slide.component.html',
  styleUrls: ['./course-slide.component.scss'],
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslateModule
  ],
})
export class CourseSlideComponent {
  @Input() course!: any;
}
