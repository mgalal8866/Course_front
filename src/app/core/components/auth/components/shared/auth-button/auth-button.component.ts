import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
  standalone: true
})
export class AuthButtonComponent implements OnInit {
  @Input() title!: string;
  @Input() disabled = false;
  @Input() type!: string;

  constructor() {}

  ngOnInit(): void {}
}
