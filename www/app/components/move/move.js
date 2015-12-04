import {CORE_DIRECTIVES} from 'angular2/angular2';
import {Page, NavParams, NavController, ViewController} from 'ionic/ionic';
import {PokemonService} from '../../services/pokemon-service';
import {Capitalize} from '../../pipes/capitalize'
import {AsyncPipe} from 'angular2/common';
import Move from '../../models/Move';
import Loader from '../loader/loader';

@Page({
  templateUrl: 'app/components/move/move.html',
  providers: [PokemonService],
  directives: [CORE_DIRECTIVES, Loader],
  pipes: [AsyncPipe, Capitalize]
})

export default class MoveDetail {

  private move:Move;

  constructor(pokemonService: PokemonService, params: NavParams, nav: NavController, viewCtrl: ViewController) {
    this.params = params;
    this.nav = nav;
    this.viewCtrl = viewCtrl;
    this.pokemonService = pokemonService;
  }

  onPageWillEnter() {
    this.viewCtrl.setBackButtonText(this.params.get('pokemon').name);
  }

  onPageDidEnter() {
    let move = this.params.get('move');
    this.pokemonService.getMoveDetails(move.resource_uri).then(response => {
        this.move = response;
    });
  }


}
