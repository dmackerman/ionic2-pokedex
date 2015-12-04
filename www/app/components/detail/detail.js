import {CORE_DIRECTIVES} from 'angular2/angular2';
import {Page, NavParams, NavController, ViewController} from 'ionic/ionic';
import {PokemonService} from '../../services/pokemon-service';
import {Capitalize} from '../../pipes/capitalize'
import Pokemon from '../../models/Pokemon';
import MoveDetail from '../move/move';
import './detail.scss';

@Page({
  templateUrl: 'app/components/detail/detail.html',
  providers: [PokemonService],
  directives: [CORE_DIRECTIVES],
  pipes: [Capitalize]
})

export class PokemonDetail {

  private pokemon:Pokemon;

  constructor(pokemonService: PokemonService, params: NavParams, nav: NavController, viewCtrl: ViewController) {
    this.params = params;
    this.nav = nav;
    this.viewCtrl = viewCtrl;
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

  goToMove(move) {
    this.pokemonService.getMoveDetails(move.resource_uri).then(response => {
      this.nav.push(MoveDetail, {
          pokemon: this.pokemon,
          move: response
      });
    });
  }


}
