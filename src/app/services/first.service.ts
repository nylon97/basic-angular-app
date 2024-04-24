import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiNpms } from "../models/api-npms.model";
import { Observable, lastValueFrom } from "rxjs";

@Injectable()
export class FirstService {

    url: string = 'https://api.npms.io/v2/search?q=scope:angular';
    totalAngularPackages: any;
    errorMessage: any;
    
    constructor(
        private http: HttpClient
    ) {}

    getInfoApiNpms = (): void => {
        this.http.get<ApiNpms>(this.url).subscribe((data) => {
            this.totalAngularPackages = data.total;
            console.log('getInfoApiNpms');
        })
    }

    getInfoApiNpmsWithErrors = (): void => {
        this.http.get<ApiNpms>(this.url).subscribe({
            next: data => {
                this.totalAngularPackages = data.total;
                console.log('getInfoApiNpmsWithErrors');
            },
            error: error => {
                this.errorMessage = error.message;
            }
        })
    }
    
    getInfoObservable = (): Observable<ApiNpms> => {
        return this.http.get<ApiNpms>(this.url);
    }

    getInfoPromise = (): Promise<ApiNpms>  => {
        return lastValueFrom(this.getInfoObservable());
    };
}