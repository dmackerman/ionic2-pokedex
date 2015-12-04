import {CORE_DIRECTIVES} from 'angular2/angular2';
import {Page, NavParams, NavController, ViewController} from 'ionic/ionic';
import {PokemonService} from '../../services/pokemon-service';
import {Capitalize} from '../../pipes/capitalize'
import Move from '../../models/Move';

@Page({
  templateUrl: 'app/components/move/move.html',
  providers: [PokemonService],
  directives: [CORE_DIRECTIVES],
  pipes: [Capitalize]
})

export default class MoveDetail {

  private move:Move;

  constructor(pokemonService: PokemonService, params: NavParams, nav: NavController, viewCtrl: ViewController) {
    this.params = params;
    this.nav = nav;
    this.viewCtrl = viewCtrl;
    this.pokemonService = pokemonService;
    console.log(this.params);
    this.move = this.params.get('move');
  }

  onPageWillEnter() {
    this.viewCtrl.setBackButtonText(this.params.get('pokemon').name);
  }


}
