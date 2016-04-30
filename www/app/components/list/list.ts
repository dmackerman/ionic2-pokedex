import {Page, NavController} from 'ionic-angular';
import {PokemonService} from '../../services/pokemon-service';
import {Capitalize} from '../../pipes/capitalize'
import {PokemonDetail} from '../detail/detail';
import Pokemon from '../../models/pokemon';
import Loader from '../loader/loader';

import { sortBy } from 'lodash';

@Page({
    templateUrl: 'app/components/list/list.html',
    providers: [PokemonService],
    directives: [Loader],
    pipes: [Capitalize]
})

export class List {

    private allPokemon: Array<Pokemon> = [];
    private searchQuery = '';

    constructor(
        public service: PokemonService,
        public nav: NavController
    )
    { }

    onPageDidEnter(): void {
        this.service.getAllPokemon().then(response => {
            this.allPokemon = response;
            console.log(this.allPokemon);
        });
    }

    goToDetail(pokemon): void {
        this.nav.push(PokemonDetail, {
            pokemon: pokemon
        });
    }

    getItems(): Array<Pokemon> {
        var q = this.searchQuery;
        if (q.trim() == '') {
            return sortBy(this.allPokemon, 'name');
        }
        return this.allPokemon.filter((v) => {
            if (v.name.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
                return true;
            }
            return false;
        });
    }

}
