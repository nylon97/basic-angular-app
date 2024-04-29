import { CommonModule, CurrencyPipe, registerLocaleData } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { ThirdComponent } from "./third.component";
import { CustomDatePipe } from "src/app/pipes/custom-date.pipe";
// import localePy from "@angular/common/locales/es-PY";

// registerLocaleData(localePy, 'es');

@NgModule({
    declarations: [
        ThirdComponent
    ],
    imports: [
        CommonModule,
        CustomDatePipe
    ],
    // providers: [{provide: LOCALE_ID, useValue: 'es-PY' }]
})
export class ThirdModule {}