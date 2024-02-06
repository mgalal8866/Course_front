import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-free-services',
  standalone: true,
  templateUrl: './free-services.component.html',
  styleUrls: ['./free-services.component.scss'],
  imports: [
    CommonModule,
    BreadcrumbComponent,
    RouterModule
  ],
})
export class FreeServicesComponent {

}
