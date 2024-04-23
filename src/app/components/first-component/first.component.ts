import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'first-component',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
})
export class FirstComponent {

    form = new FormGroup({
      first: new FormControl("Nombre", Validators.minLength(2)),
      last: new FormControl("Apellido", Validators.minLength(2))
    });

    get first(): any {
      return this.form.get("first");
    }
    get last(): any {
      return this.form.get("last");
    }

    constructor() {}

    clearAll() {
      this.first.reset();
      this.last.reset();
    }
}