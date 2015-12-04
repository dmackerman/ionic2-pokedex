import 'zone.js';
import 'reflect-metadata';
import {App, Platform} from 'ionic/ionic';
import {List} from './components/list/list';
import {PokemonService} from './services/pokemon-service';
import './app.scss';

@App({
  templateUrl: 'app/app.html'
})

export class MyApp {
  constructor(platform: Platform) {
    this.list = List;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
