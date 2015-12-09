import { capitalize } from 'lodash';
import { Pipe } from 'angular2/angular2';

@Pipe({
    name: 'capitalize'
})
export class Capitalize {
    transform(value: string): string {
        return capitalize(value);
    }
}
