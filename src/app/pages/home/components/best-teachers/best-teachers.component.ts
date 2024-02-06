import { Component, OnInit } from '@angular/core';
import { BestTeachersService } from './best-teachers.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-best-teachers',
  templateUrl: './best-teachers.component.html',
  styleUrls: ['./best-teachers.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage
  ]
})
export class BestTeachersComponent implements OnInit {

  bestTeachers!: any;
  constructor(private bestTeachersService: BestTeachersService) { }

  ngOnInit(): void {
    this.bestTeachersService.getBestTeachersData().subscribe(data => this.bestTeachers = data);
  }
}
