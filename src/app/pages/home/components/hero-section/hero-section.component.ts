import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HerosectionService } from './hero-section.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';
import { SecondaryButtonComponent } from 'src/app/shared/components/secondary-button/secondary-button.component';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    CarouselModule,
    CommonModule,
    SecondaryButtonComponent,
    TranslateModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroSectionComponent {
  heroSectionData: any;
  swiperEl: any;
  currentIndex = 1;
  bulletsCount!: number

  constructor(
    private heroSectionService: HerosectionService,
  ) { }


  swiperParams: SwiperOptions = {
    autoplay: true,
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      el: '.pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.team-button-next-unique',
      prevEl: '.team-button-prev-unique',
    },
    on: {
      init() { }
    },
  };

  ngAfterViewInit(): void {
    this.swiperEl = document.querySelector('swiper-container.hero');

    Object.assign(this.swiperEl as any, this.swiperParams);
    (this.swiperEl as any).initialize();
    this.swiperEl.addEventListener('slidechange', (evt: any) => this.slideChange(evt));

  }

  ngOnInit(): void {
    this.heroSectionService.getHeroSectionData().subscribe(data => {
      this.heroSectionData = data

      setTimeout(() => {
        this.bulletsCount = document.querySelectorAll('.hero .swiper-pagination-bullet').length;
        console.log(this.bulletsCount);
      }, 100);
    }
    );
  }

  slideChange(evt: any) {
    this.currentIndex = evt.detail[0].activeIndex + 1
  }

}
