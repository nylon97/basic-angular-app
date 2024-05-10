import { NgModule } from "@angular/core";
import { FourthComponent } from "./fourth.component";
import { CommonModule } from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        FourthComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatTableModule,
        MatButtonModule
    ]
})
export class FourthModule {}