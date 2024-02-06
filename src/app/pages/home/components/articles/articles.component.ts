import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  standalone: true,
  imports: [
    ArticleComponent,
    NgOptimizedImage,
    CommonModule
  ]
})
export class ArticlesComponent implements OnInit{

  articlesData: any;
  constructor(private articlesService: ArticlesService){}
  ngOnInit(): void {
    this.articlesService.getArticlesData().subscribe(data => this.articlesData = data)
  }
}
