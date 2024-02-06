import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ]
})
export class CourseCardComponent {
  @Input() course: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  getCourseDetails(id: string){
    this.router.navigate([id], {relativeTo: this.activatedRoute})
  }
}
