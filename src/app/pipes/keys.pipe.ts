import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): Heroe[] {
    let keys = []
    for (let key in value) {
      keys.push(key)
    }
    return keys
  }

}
