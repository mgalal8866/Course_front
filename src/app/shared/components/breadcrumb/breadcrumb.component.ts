import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule,
    NgOptimizedImage,
    TranslateModule
  ],
})
export class BreadcrumbComponent {

}
