import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { DashboardModule } from "src/app/admin/dashboard/dashboard.module";
import { ProfileComponent } from "./profile.component";


const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    },
];

@NgModule({
    imports: [
        DashboardModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        RouterModule.forChild(routes),
    ],
    declarations: [ProfileComponent],
})
export class ProfileModule { }