import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from 'angular2/angular2';
import {App, Platform} from 'ionic/ionic';
import {Page1} from './page1/page1';
import {PokemonService} from './pokemon-service/pokemon-service';
import './app.scss';

@App({
  templateUrl: 'app/app.html'
})

export class MyApp {
  constructor(platform: Platform) {
    this.allPokemon = Page1;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
