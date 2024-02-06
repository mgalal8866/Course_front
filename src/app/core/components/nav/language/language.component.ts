import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  standalone: true,
  imports: [
    MatMenuModule, NgOptimizedImage
  ]
})
export class LanguageComponent {
  @Output() langChange = new EventEmitter();
}
