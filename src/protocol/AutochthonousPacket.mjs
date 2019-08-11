import StructuredPacket from '../rmpitils/src/StructuredPacket.mjs';

export default class AutochthonousPacket extends StructuredPacket {
    static id = Infinity;

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