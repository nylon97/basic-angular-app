import { Component, OnInit } from "@angular/core";
import { ApiNpms } from "src/app/models/api-npms.model";
import { FirstService } from "src/app/services/first.service";

@Component({
    selector: 'second-component',
    templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {
    
    constructor(
        private firstService: FirstService
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
}