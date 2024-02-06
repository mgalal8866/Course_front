import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { GeneralAbilitiesService } from './general-abilities.service';
import { CommonModule } from '@angular/common';
import { concatMap } from 'rxjs';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-general-abilities',
  templateUrl: './general-abilities.component.html',
  styleUrls: ['./general-abilities.component.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    MatTabsModule,
    CommonModule,
    CourseCardComponent
  ]
})
export class GeneralAbilitiesComponent implements OnInit {

  categories!: any[];
  courses!: any[];

  constructor(private generalAbilitiesService: GeneralAbilitiesService) { }

  ngOnInit(): void {
    this.generalAbilitiesService.getFreeCategories()
      .pipe(concatMap((data: any) => {
        this.categories = data;
        return this.generalAbilitiesService.getCoursesByCategory(data[0].id)
      })).subscribe(data => this.courses = data.categories)
  }

  getCoursesById(event: MatTabChangeEvent) {
    const id = this.categories[event.index].id
    this.generalAbilitiesService.getCoursesByCategory(id).subscribe(data => this.courses = data.categories)
  }
}
