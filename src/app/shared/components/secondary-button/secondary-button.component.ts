import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss'],
  standalone: true
})
export class SecondaryButtonComponent {
  @Input() title!: string;
}
