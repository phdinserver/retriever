import * as packets from './packets.mjs';
import AutochthonousPacket from './AutochthonousPacket.mjs';
import { WrappedBuffer } from '../rmpitils/src/rmpitils.mjs';

export default class ProtocolManager {
    static findProtocolById(id) {
        for (const protocol of Object.values(packets))
            if (protocol.id === id)
                return protocol;
        return AutochthonousPacket;
    }

    static factory(data) {
        let packet = new (this.findProtocolById(data[0]))(new WrappedBuffer(data.subarray(1)));
        packet.decode();
        return packet;
    }
}