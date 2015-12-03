import {CORE_DIRECTIVES} from 'angular2/angular2';
import {Page, NavController} from 'ionic/ionic';
import {PokemonService} from '../../services/pokemon-service';
import {Capitalize} from '../../pipes/capitalize'
import {PokemonDetail} from '../detail/detail';

@Page({
  templateUrl: 'app/components/list/list.html',
  providers: [PokemonService],
  directives: [CORE_DIRECTIVES],
  pipes: [Capitalize]
})

export class List {

    constructor(service: PokemonService, nav: NavController) {
        this.service = service;
        this.nav = nav;
        this.allPokemon = [];
        this.searchQuery = '';
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

    getItems() {
        var q = this.searchQuery;
        if (q.trim() == '') {
            return this.allPokemon;
        }
        return this.allPokemon.filter((v) => {
            if (v.name.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
                return true;
            }
            return false;
        });
    }

}
