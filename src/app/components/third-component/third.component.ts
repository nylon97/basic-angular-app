import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'third-component',
    templateUrl: './third.component.html',
    styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
    
    price: number = 12345.6789;
    date: Date = new Date();
    
    constructor() {}

    ngOnInit(): void {
    }
}