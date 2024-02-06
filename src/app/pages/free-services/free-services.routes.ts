import { Routes } from '@angular/router';
import { FreeServicesComponent } from './free-services.component';
import { GeneralAbilitiesComponent } from './components/general-abilities/general-abilities.component';
import { StudyPlanComponent } from './components/study-plan/study-plan.component';
import { PercentageComponent } from './components/percentage/percentage.component';
import { CourseDetailsComponent } from './components/general-abilities/course-details/course-details.component';

export const FreeServicesRoutes: Routes = [
    {
        path: '',
        component: FreeServicesComponent,
        children: [
            {
                path: 'general-abilities',
                data: { breadcrumb: 'general_services.breadcrumb' },
                component: GeneralAbilitiesComponent,
            },
            {
                path: 'general-abilities/:id',
                data: { breadcrumb: 'general_services.breadcrumb' },
                component: CourseDetailsComponent
            },
            {
                path: 'study-plan',
                data: { breadcrumb: 'study_plan.breadcrumb' },
                component: StudyPlanComponent
            },
            {
                path: 'percentage',
                data: { breadcrumb: 'percentage.breadcrumb' },
                component: PercentageComponent
            }
        ]
    }

];

