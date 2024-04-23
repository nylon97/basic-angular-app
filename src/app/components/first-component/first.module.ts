import { NgModule } from "@angular/core";
import { FirstComponent } from "./first.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        FirstComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class FirstModule {}