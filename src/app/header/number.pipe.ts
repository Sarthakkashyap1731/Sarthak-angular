import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipe',
})
export class NumberPipe implements PipeTransform {
  transform(allLocation: any, number: any): String {
    console.log('number', number);
    console.log('allLocationa', allLocation);
    if (number.includes('India') == true) {
      return '+91' + allLocation;
    }
    if (allLocation.includes('USA') == true) {
      return '+12' + number;
    }
    if (number.includes('Japna') == true) {
      return '+23' + allLocation;
    }
    if (allLocation.includes('China') == true) {
      return '+45';
    }
    if (allLocation.includes('England') == true) {
      return '+78';
    }
  }
}
