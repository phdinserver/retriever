export default class Packet {
    constructor() {
        if (this.constructor === Packet)
            throw new ReferenceError('Abstract class Packet');
    }

    read() {
        if (this.constructor === Packet)
            throw new ReferenceError('Abstract class Packet');
    }
}