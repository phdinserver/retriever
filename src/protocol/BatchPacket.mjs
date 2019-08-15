import { StructuredPacket } from '../rmpitils/src/rmpitils.mjs';
import ProtocolManager from './ProtocolManager.mjs';

export default class BatchPacket extends StructuredPacket {
    static id = 0xFF;

    #packetList = []; // assume encoded

    decode() {
        super.decode();
        const len = this.wbuf.readUInt32LE();
        this.#packetList = new Array(len);
        for (let i = 0; i < len; i++)
            this.#packetList[i] = ProtocolManager.factory(this.wbuf.readLByteArray());
    }

    encode() {
        super.encode();
        this.wbuf.writeUInt32LE(this.#packetList.length);

        for (const packet of this.#packetList)
            this.wbuf.writeLByteArray(packet.getRawData());
    }

    getEstimatedSize() {
        return 4 + this.#packetList.map(e => e.getRealSize() + 5).reduce((a, b) => a + b);
    }

    putPacket(packet) {
        this.#packetList.push(packet);
    }

    putPackets(packetArr) {
        this.#packetList.push(...packetArr); // Doesn't encode automatically because of redundant encodings
    }

    getPackets() {
        return this.#packetList;
    }
}