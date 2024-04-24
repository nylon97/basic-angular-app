import { NgModule } from "@angular/core";
import { FirstService } from "src/app/services/first.service";
import { StreamingAvailabilityService } from "src/app/services/streaming-availability.service";

@NgModule({
    providers: [
        FirstService,
        StreamingAvailabilityService
    ]
})
export class SecondModule {}