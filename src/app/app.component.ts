import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'el-yousr';

  canHaveNav = true;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
}
