import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  imports: [
    MatExpansionModule,
    CommonModule
  ]
})
export class FaqComponent implements OnInit{

  questions = [
    {
      title: 'ما هو "اليسر"؟',
      description:
        '"اليسر" هو منصة تعليم إلكترونية تهدف إلى تحسين وتسهيل عملية التعلم عن بُعد..',
    },

    {
      title: '"اليسر" هو منصة تعليم إلكترونية تهدف إلى تحسين وتسهيل عملية التعلم عن بُعد.',
      description: 'يمكنك التسجيل عبر الموقع الرسمي لـ "اليسر"، اتبع الخطوات الموجودة في صفحة التسجيل.',
    },

    {
      title: 'هل يمكنني تخصيص خيارات التعلم وفقًا لاحتياجاتي؟',
      description: 'يمكنك التسجيل عبر الموقع الرسمي لـ "اليسر"، اتبع الخطوات الموجودة في صفحة التسجيل.',
    },
    {
      title: 'هل يمكنني الوصول إلى دورات "اليسر" عبر هاتفي الذكي؟',
      description: 'يمكنك التسجيل عبر الموقع الرسمي لـ "اليسر"، اتبع الخطوات الموجودة في صفحة التسجيل.',
    },
    {
      title: 'هل يمكنني الوصول إلى دورات "اليسر" عبر هاتفي الذكي؟',
      description: 'يمكنك التسجيل عبر الموقع الرسمي لـ "اليسر"، اتبع الخطوات الموجودة في صفحة التسجيل.',
    },
    {
      title: 'هل يمكنني مشاركة تقارير التقدم مع مدربين أو أساتذة؟',
      description: 'يمكنك التسجيل عبر الموقع الرسمي لـ "اليسر"، اتبع الخطوات الموجودة في صفحة التسجيل.',
    },
  ];
  faqData!: any;

  constructor(private faqService: FaqService){}

  ngOnInit(): void {
    this.faqService.getFaqData().subscribe(res => this.faqData = res);
  }
}
