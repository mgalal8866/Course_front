import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './components/join/join.component';
import { FaqComponent } from './components/faq/faq.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TestmonialsComponent } from './components/testmonials/testmonials.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { BestCoursesComponent } from './components/best-courses/best-courses.component';
import { BestTeachersComponent } from './components/best-teachers/best-teachers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    JoinComponent,
    FaqComponent,
    ArticlesComponent,
    TestmonialsComponent,
    HeroSectionComponent,
    WelcomeSectionComponent,
    BestCoursesComponent,
    BestTeachersComponent
  ],
})
export class HomeComponent {

}
