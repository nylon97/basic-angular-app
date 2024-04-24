import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiNpms } from "../models/api-npms.model";
import { Observable, lastValueFrom } from "rxjs";

@Injectable()
export class StreamingAvailabilityService {

    url: string = 'https://streaming-availability.p.rapidapi.com';
    headers: HttpHeaders = new HttpHeaders({
        'X-RapidAPI-Key': 'b1e5b305bfmsh7573c9a87f5ab3fp1c0f97jsnaab0c0517d56',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    });
    
    constructor(
        private http: HttpClient
    ) {}
    
    getCountries = (): Observable<any> => {
        const endpoint: string = `${this.url}/countries`;
        return this.http.get<ApiNpms>(endpoint, { headers: this.headers});
    }

    getGenres = (): Observable<any> => {
        const endpoint: string = `${this.url}/genres`;
        return this.http.get<ApiNpms>(endpoint, { headers: this.headers});
    }
}