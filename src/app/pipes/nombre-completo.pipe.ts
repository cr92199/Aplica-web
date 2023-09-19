import { Pipe, PipeTransform } from '@angular/core';
import { IContac } from '../Components/models/contac.interface';
import { IRandomContac } from '../Components/models/userrandom.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(random: IRandomContac, ...args: unknown[]): string {
    return `${random.name.title} ${random.name.first} ${random.name.last}`;
  }

}
