import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { DistributorqrComponent } from "./distributorqr.component";


const routes: Routes = [
    {
        path: '',
        component: DistributorqrComponent
    },
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        RouterModule.forChild(routes)
    ],
    declarations:[DistributorqrComponent]
})
export class DistributorqrModule { }