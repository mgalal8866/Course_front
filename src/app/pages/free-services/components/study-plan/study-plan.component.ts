import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GeneralInputComponent } from 'src/app/shared/components/inputs/general-input/general-input.component';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SharedButtonComponent } from 'src/app/shared/components/shared-button/shared-button.component';

@Component({
  selector: 'app-study-plan',
  standalone: true,
  templateUrl: './study-plan.component.html',
  styleUrls: ['./study-plan.component.scss'],
  imports: [
    CommonModule,
    TranslateModule,
    GeneralInputComponent,
    SharedButtonComponent
  ],
})
export class StudyPlanComponent implements OnInit {

  isSubmitted = false;
  studyPlanForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studyPlanForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      password: ['', Validators.required],
    });
  }
  getControlErrors(controlName: string): ValidationErrors | null {
    return this.studyPlanForm.controls[controlName].errors;
  }

}
