import 'zone.js';
import 'reflect-metadata';
import {App, Platform} from 'ionic-framework/ionic';
import {List} from './components/list/list';
import {PokemonService} from './services/pokemon-service';

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
