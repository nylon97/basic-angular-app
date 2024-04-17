import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { State } from "src/app/models/state.model";

@Component({
    standalone: true,
    selector: 'first-component',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
    imports: [ReactiveFormsModule],
})
export class FirstComponent {

    name = new FormControl('');
    surname = new FormControl('');
    states: State[] = [
        {
          name: 'Arkansas',
          population: '2.978M',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
        },
        {
          name: 'California',
          population: '39.14M',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
        },
        {
          name: 'Florida',
          population: '20.27M',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
        },
        {
          name: 'Texas',
          population: '27.47M',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
        }
    ];
    
    constructor() {}

    updateName = (): void => {
        this.name.setValue('Actualizamos valor name');
    }

    initForms = (): void => {
        this.name.setValue('');
        this.surname.setValue('');
    }
}