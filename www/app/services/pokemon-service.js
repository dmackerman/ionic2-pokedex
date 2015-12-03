import 'isomorphic-fetch';
import {Injectable} from 'angular2/angular2';
import Pokemon from '../models/Pokemon';

@Injectable()
export class PokemonService {

  getAllPokemon():Promise {
    return fetch(`http://pokeapi.co/api/v1/pokedex/1/`)
        .then(response => response.json())
        .then(json => json.pokemon.map(pokemonJson => new Pokemon(pokemonJson)))
  }

  /**
   * Returns a Single pokemon, and is retrieved by it's URL
   * @type {Pokemon}
   */
  getPokemon(pokemon: Pokemon):Promise {
    return fetch(`http://pokeapi.co/${pokemon.url}`)
        .then(response => response.json())
        .then(json => new Pokemon(json))
  }
}
