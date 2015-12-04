import 'isomorphic-fetch';
import {Injectable} from 'angular2/angular2';
import Pokemon from '../models/Pokemon';
import Move from '../models/Move';

@Injectable()
export class PokemonService {

  getAllPokemon():Promise {
    return fetch(`http://pokeapi.co/api/v1/pokedex/1/`)
        .then(response => response.json())
        .then(json => json.pokemon.map(pokemonJson => new Pokemon(pokemonJson)))
  }

  getPokemonByUrl(url: String) {
    return fetch(`http://pokeapi.co/${url}`)
    .then(response => response.json())
    .then(json => new Pokemon(json))
  }

  /**
   * Returns a Single pokemon, and is retrieved by it's URL
   * @type {Pokemon}
   */
  getPokemon(pokemon: Pokemon):Promise {
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

  getMoveDetails(url: String) {
    return fetch(`http://pokeapi.co/${url}`)
      .then(response => response.json())
      .then(json => new Move(json))
  }
}
