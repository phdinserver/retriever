import BatchPacket from './BatchPacket.mjs';

export default class PacketUtils {
    static send(packet, client) {
        client.write(packet.getRawData());
    }

    static createPacket(packetConstructor) {
        return new packetConstructor(Buffer.alloc(1));
    }

    static makeBatch(packets) {
        let batchPacket = PacketUtils.createPacket(BatchPacket);
        batchPacket.putPackets(packets);
        batchPacket.encode();
        return batchPacket;
    }
};