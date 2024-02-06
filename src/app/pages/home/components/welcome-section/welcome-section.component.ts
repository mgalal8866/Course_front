import { Component, OnInit } from '@angular/core';
import { WelcomeService } from './welcome-section.service';
import { NgOptimizedImage } from '@angular/common';
import { SecondaryButtonComponent } from 'src/app/shared/components/secondary-button/secondary-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss'],
  standalone: true,
  imports:[
    NgOptimizedImage,
    SecondaryButtonComponent,
    TranslateModule
  ]
})
export class WelcomeSectionComponent implements OnInit {
  welcomeData: any;
  constructor(private welcomeService: WelcomeService) { }

  ngOnInit(): void {
    this.welcomeService.getWelcomeData().subscribe(data => this.welcomeData = data);
  }
}
