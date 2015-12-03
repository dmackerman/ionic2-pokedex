import {get} from 'lodash'

export default class Pokemon {
    name: String
    uri: String
    moves: Array
    abilities: Array

    constructor(json: Object) {
        this.name = get(json, 'name', 'Unknown');
        this.url = json.resource_uri;
        this.moves = get(json, 'moves', 'Unknown');
        this.abilities = get(json, 'abilities', 'Unknown');
    }
}
