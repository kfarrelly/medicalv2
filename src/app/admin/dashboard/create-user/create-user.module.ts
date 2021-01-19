import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { DashboardModule } from "../dashboard.module";
import { CreateUserComponent } from "./create-user.component";


const routes: Routes = [
    {
        path: '',
        component: CreateUserComponent,

    }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        RouterModule.forChild(routes),
        HttpClientModule,
        DashboardModule
    ],
    declarations: [CreateUserComponent],
    // exports:[DashboardComponent]
})
export class CreateUserodule { }