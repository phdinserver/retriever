import StructuredPacket from '../../rmpitils/src/StructuredPacket.mjs';

export default class SchoolMealRequestPacket extends StructuredPacket {
    static id = 1;

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