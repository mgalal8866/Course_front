import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss'],
  standalone: true
})
export class SharedButtonComponent {
  @Input() title!: string;
}
