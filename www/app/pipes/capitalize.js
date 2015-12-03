import { capitalize } from 'lodash';
import { Pipe } from 'angular2/angular2';

@Pipe({
  name: 'capitalize'
})
export class Capitalize {
  transform(value:string) : any {
    return capitalize(value);
  }
}
