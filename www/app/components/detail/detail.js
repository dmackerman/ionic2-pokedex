import {CORE_DIRECTIVES} from 'angular2/angular2';
import {Page, NavParams} from 'ionic/ionic';
import {PokemonService} from '../../services/pokemon-service';
import Pokemon from '../../models/Pokemon';

@Page({
  templateUrl: 'app/components/detail/detail.html',
  providers: [PokemonService],
  directives: [CORE_DIRECTIVES]
})

export class PokemonDetail {

  private pokemon:Pokemon;

  constructor(pokemonService: PokemonService, params: NavParams) {
    this.params = params;
    this.pokemonService = pokemonService;

    this.pokemonService.getPokemon(this.params.get('pokemon')).then(response => {
      console.log(response);
      this.pokemon = response;
    });

  }


}
