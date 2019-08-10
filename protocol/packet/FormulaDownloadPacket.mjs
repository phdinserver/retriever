import Packet from './../Packet.mjs';

export class FormulaDownloadPacket extends Packet {
    static id = 0;

    constructor() {
        super();
    }

    read(data) {

    }
}