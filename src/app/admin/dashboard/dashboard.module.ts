import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'profile',
        loadChildren: '../../user/profile/profile.module#ProfileModule' // not working 

    },
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        RouterModule.forChild(routes)
    ],
    exports:[DashboardComponent],
    declarations: [DashboardComponent],
})
export class DashboardModule { }