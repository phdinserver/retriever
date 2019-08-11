export default class Packet {
    constructor(wbuf) {
        this.wbuf = wbuf;
        if (this.constructor === Packet)
            throw new ReferenceError('Abstract class Packet');
    }

    decode() {
        if (this.constructor === Packet)
            throw new ReferenceError('Abstract class Packet');
    }

    encode() {
        if (this.constructor === Packet)
            throw new ReferenceError('Abstract class Packet');
    }

    getBuffer() {
        return this.wbuf;
    }
}