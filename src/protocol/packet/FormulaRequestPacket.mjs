import { StructuredPacket } from '../../rmpitils/src/rmpitils.mjs';

export default class FormulaRequestPacket extends StructuredPacket {
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