import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MyloginComponent } from "./mylogin.component";


const routes: Routes = [
    {
        path: '',
        component: MyloginComponent
    },
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        RouterModule.forChild(routes)
    ],
    declarations:[MyloginComponent]
})
export class MyloginModule { }