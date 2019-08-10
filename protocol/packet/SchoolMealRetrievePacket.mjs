import Packet from './../Packet.mjs';

export class SchoolMealRetrievePacket extends Packet {
    static id = 1;

    constructor() {
        super();
    }

    read(data) {

    }
}