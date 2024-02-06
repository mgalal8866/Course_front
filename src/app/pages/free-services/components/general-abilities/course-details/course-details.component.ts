import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GeneralAbilitiesService } from '../general-abilities.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
})
export class CourseDetailsComponent implements OnInit{

  course: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private generalAbilitiesService: GeneralAbilitiesService
    ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.generalAbilitiesService.GetCourseById(id).subscribe(data => {
      this.course = data;
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    })
  }

}
