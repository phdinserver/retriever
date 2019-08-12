import { SchoolMealRespondPacket } from '../protocol/packets.mjs';
import PacketUtils from '../protocol/PacketUtils.mjs';


export default function handle(packet, client) {
    let respondPacket = PacketUtils.createPacket(SchoolMealRespondPacket);
    respondPacket.setMealText('Test');
    PacketUtils.send(respondPacket, client);
}