import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BestCoursesService } from './best-courses.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CourseSlideComponent } from './course-slide/course-slide.component';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();
@Component({
  selector: 'app-best-courses',
  templateUrl: './best-courses.component.html',
  styleUrls: ['./best-courses.component.scss'],
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule,
    CourseSlideComponent,
    NgOptimizedImage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BestCoursesComponent implements OnInit, AfterViewInit {
  bestCoursesData: any;
  swiperEl: any;
  currentIndex = 1;
  bulletsCount!: number

  swiperParams: SwiperOptions = {
    autoplay: true,
    spaceBetween: 30,
    pagination: {
      el: '.course-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.course-button-next-unique',
      prevEl: '.course-button-prev-unique',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },

      568: {
        slidesPerView: 1.5,
      },

      640: {
        slidesPerView: 1.5,
      },
      680: {
        slidesPerView: 2.2,
      },

      768: {
        slidesPerView: 2.5,
      },


      1280: {
        slidesPerView: 3.2,
      },

      1440: {
        slidesPerView: 4.2,
      },
    },
    on: {
      init() { }
    }
  };

  ngAfterViewInit(): void {
    this.swiperEl = document.querySelector('swiper-container.courses');

    Object.assign(this.swiperEl as any, this.swiperParams);
    (this.swiperEl as any).initialize();
    this.swiperEl.addEventListener('slidechange', (evt: any) => this.slideChange(evt));

  }
  constructor(private bestCoursesService: BestCoursesService) { }

  ngOnInit(): void {
    this.bestCoursesService.getBestCoursesData().subscribe(data => {
      this.bestCoursesData = data

      setTimeout(() => {
        this.bulletsCount = document.querySelectorAll('.courses .swiper-pagination-bullet').length;
        console.log(this.bulletsCount);
      }, 100);
    }
    );
  }

  slideChange(evt: any) {
    this.currentIndex = evt.detail[0].activeIndex + 1
  }

}
