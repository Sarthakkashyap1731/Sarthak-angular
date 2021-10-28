import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipe',
})
export class NumberPipe implements PipeTransform {
  transform(number: any, allLocation: any): String {
    console.log('number', number);
    console.log('allLocationa', allLocation);
    if (allLocation.includes('India') == true) {
      return '+91' + number;
    }
    if (allLocation.includes('USA') == true) {
      return '+12' + number;
    }
    if (allLocation.includes('Japna') == true) {
      return '+23' + number;
    }
    if (allLocation.includes('China') == true) {
      return '+45';
    }
    if (allLocation.includes('England') == true) {
      return '+78';
    }
  }
}
