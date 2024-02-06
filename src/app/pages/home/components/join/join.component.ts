import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { JoinService } from './join.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-join',
  standalone: true,
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslateModule
  ]
})
export class JoinComponent implements OnInit {
  joinData: any;

  backgroundImage = 'assets/images/home/join.jpeg';
  constructor(
    private joinService: JoinService,
  ) { }

  ngOnInit(): void {
    this.joinService.getJoinData().subscribe(data => this.joinData = data);
  }
}
