import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
    transform(value: Date) {
        return `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
    }
}