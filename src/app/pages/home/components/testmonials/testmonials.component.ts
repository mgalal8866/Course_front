import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestmonialCardComponent } from './testmonial-card/testmonial-card.component';
import { TestmonialsService } from './testmonials.service';

@Component({
  selector: 'app-testmonials',
  standalone: true,
  templateUrl: './testmonials.component.html',
  styleUrls: ['./testmonials.component.scss'],
  imports: [
    CommonModule,
    TestmonialCardComponent
  ],
})
export class TestmonialsComponent implements OnInit {

  testmonialsData: any;
  constructor(private testmonialsService: TestmonialsService) { }

  ngOnInit(): void {

    this.testmonialsService.getHeroTestmonialsData().subscribe(data => this.testmonialsData = data);

  }

}
