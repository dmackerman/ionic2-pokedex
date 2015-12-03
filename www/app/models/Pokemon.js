import {get} from 'lodash'

export default class Pokemon {
    name: String
    uri: String
    moves: Array
    abilities: Array
    image: String

    attack: Number
    defense: Number
    hp: Number
    speed: Number

    constructor(json: Object) {
        this.name = get(json, 'name', 'Unknown');
        this.url = json.resource_uri;
        this.moves = get(json, 'moves', 'Unknown');
        this.abilities = get(json, 'abilities', 'Unknown');
        this.stats = {
            attack: get(json, 'attack', 'Unknown');
            defense: get(json, 'defense', 'Unknown');
            hp: get(json, 'hp', 'Unknown');
            speed: get(json, 'speed', 'Unknown');
        }
    }
}
