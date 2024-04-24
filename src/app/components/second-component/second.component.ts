import { Component, OnInit } from "@angular/core";
import { ApiNpms } from "src/app/models/api-npms.model";
import { FirstService } from "src/app/services/first.service";
import { StreamingAvailabilityService } from "src/app/services/streaming-availability.service";

@Component({
    selector: 'second-component',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
    
    constructor(
        private firstService: FirstService,
        private streamingService: StreamingAvailabilityService
    ) {}

    ngOnInit(): void {
        this.firstService.getInfoApiNpms();
        this.firstService.getInfoApiNpmsWithErrors();
        this.firstService.getInfoObservable().subscribe((data: ApiNpms) => {
            console.log('getInfoObservable')
        });
        console.log('order request');
        this.getInfo();
        console.log('order request 2');
    }

    getInfo = async (): Promise<void> => {
        const data: ApiNpms = await this.firstService.getInfoPromise();
        console.log(data)
        console.log('getInfoPromise')
    }

    getCountries = (): void => {
        this.streamingService.getCountries().subscribe((data) => {
            console.log(data)
            console.log('getCountries')
        })
    }

    getGenres = (): void => {
        this.streamingService.getGenres().subscribe((data) => {
            console.log(data)
            console.log('getGenres')
        })
    }
}