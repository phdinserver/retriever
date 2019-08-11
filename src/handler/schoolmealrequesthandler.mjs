import { SchoolMealRespondPacket } from '../protocol/packets.mjs';
import { WrappedBuffer } from '../rmpitils/src/rmpitils.mjs';


export default function handle(packet, client) {
    let respondPacket = new SchoolMealRespondPacket(new WrappedBuffer(Buffer.from('1234')));
    respondPacket.setMealText('Test');
    console.log('a');
    client.write(respondPacket.getRawData());
}