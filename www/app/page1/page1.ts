import {CORE_DIRECTIVES} from 'angular2/angular2';
import {Page, NavController} from 'ionic/ionic';
import {PokemonService} from '../pokemon-service/pokemon-service';
import {PokemonDetail} from '../pokemon/detail/detail';
import {Capitalize} from '../pipes/capitalize'

@Page({
  templateUrl: 'app/page1/page1.html',
  providers: [PokemonService],
  directives: [CORE_DIRECTIVES],
  pipes: [Capitalize]
})

export class Page1 {

  constructor(service: PokemonService, nav: NavController) {
    this.service = service;
    this.nav = nav;
    this.allPokemon = [];
    this.init();
  }

  init() {
    this.service.getAllPokemon().then(response => {
      this.allPokemon = response;
      console.log(this.allPokemon);
    });
  }

  goToDetail(pokemon) {
    this.nav.push(PokemonDetail, {
      pokemon: pokemon
    });
  }

}
