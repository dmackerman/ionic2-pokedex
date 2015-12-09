import 'isomorphic-fetch';
import {Injectable} from 'angular2/angular2';
import Pokemon from '../models/Pokemon';
import Move from '../models/Move';

@Injectable()
export class PokemonService {

    /**
     * Returns all Pokemon from the pokedex
     */
    getAllPokemon() {
        return fetch(`http://pokeapi.co/api/v1/pokedex/1/`)
            .then(response => response.json())
            .then(json => json.pokemon.map(pokemonJson => new Pokemon(pokemonJson)))
    }

    /**
     * Gets a Pomemon by it's URL
     * @param {string} url [description]
     */
    getPokemonByUrl(url: string) {
        return fetch(`http://pokeapi.co/${url}`)
            .then(response => response.json())
            .then(json => new Pokemon(json))
    }

    /**
     * Returns a Single pokemon by passing in an entire Pokemon
     * instance
     * @type {Pokemon}
     */
    getPokemon(pokemon: Pokemon): Promise {
        let pokemon;
        return fetch(`http://pokeapi.co/${pokemon.url}`)
            .then(response => response.json())
            .then(json => {
                pokemon = json;
                return fetch(`http://pokeapi.co${json.sprites[0].resource_uri}`)
            })
            .then(response => response.json())
            .then(spriteJson => {
                let _pokemon = new Pokemon(pokemon);
                _pokemon.image = `http://pokeapi.co${spriteJson.image}`;
                return _pokemon;
            })
    }

    /**
     * Gets move details by URL
     * @param {string} url
     */
    getMoveDetails(url: string) {
        return fetch(`http://pokeapi.co/${url}`)
            .then(response => response.json())
            .then(json => new Move(json))
    }
}
