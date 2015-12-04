import {Component} from 'angular2/angular2';
import './loader.scss';

@Component({
  selector: 'loader',
  template: `
    <div class="loader">
      <img class="loader-svg" src="app/assets/loader.svg" alt="Loading" />
    </div>
  `
})
export default class Loader {
  text: string

  constructor() {
    console.log('I am loading now!!!');
    this.text = 'Loading...';
  }
}
