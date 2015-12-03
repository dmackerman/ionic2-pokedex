import {CORE_DIRECTIVES} from 'angular2/angular2';
import {Page, NavParams, NavController} from 'ionic/ionic';
import {PokemonService} from '../../services/pokemon-service';
import Pokemon from '../../models/Pokemon';
import './detail.scss';

@Page({
  templateUrl: 'app/components/detail/detail.html',
  providers: [PokemonService],
  directives: [CORE_DIRECTIVES]
})

export class PokemonDetail {

  private pokemon:Pokemon;

  constructor(pokemonService: PokemonService, params: NavParams, nav: NavController) {
    this.params = params;
    this.nav = nav;
    this.pokemonService = pokemonService;

    this.pokemonService.getPokemon(this.params.get('pokemon')).then(response => {
      this.pokemon = response;
      console.log(this.pokemon);
    });
  }

  goToEvolution(evolution) {
    this.pokemonService.getPokemonByUrl(evolution.resource_uri).then(response => {
      this.nav.push(PokemonDetail, {
          pokemon: response
      });
    });
  }


}
