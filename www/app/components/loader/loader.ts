import {Component, Input} from 'angular2/angular2';
import './loader.scss';

@Component({
    selector: 'loader',
    template: `
    <div class="loader">
        <img class="loader-svg" src="app/assets/loader.svg" alt="Loading" />
        <p><strong>{{ text }}</strong></p>
    </div>`
})

export default class Loader {
    @Input() text: string;
}
