import { StructuredPacket } from '../../rmpitils/src/rmpitils.mjs';

export default class SchoolMealRequestPacket extends StructuredPacket {
    static id = 2;

    decode() {
        super.decode();
    }

    encode() {
        super.encode();
    }

    getEstimatedSize() {
        return 0;
    }
}