import {get} from 'lodash'

export default class Move {
    id: Number
    accuracy: Number,
    description: String,
    name: String
    power: Number
    pp: Number
    resource_uri: String

    constructor(json: Object) {
        this.name = get(json, 'name', 'Unknown');
        this.accuracy = get(json, 'accuracy', 'Unknown');
        this.power = get(json, 'power', 'Unknown');
        this.pp = get(json, 'pp', 'Unknown');
        this.description = get(json, 'description', 'Unknown');
    }
}
