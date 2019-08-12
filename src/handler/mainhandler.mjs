import HandlerCenter from './HandlerCenter.mjs';
import ProtocolManager from '../protocol/ProtocolManager.mjs';

import schoolmealrequesthandler from './schoolmealrequesthandler.mjs';
import { SchoolMealRequestPacket } from '../protocol/packets.mjs';

HandlerCenter.registerHandler(SchoolMealRequestPacket, schoolmealrequesthandler);

function process(data, client) {
    if (data.length < 1)
        return; // Not a packet
    HandlerCenter.handle(ProtocolManager.factory(data), client);
}

export { process };