import StructuredPacket from '../../rmpitils/src/StructuredPacket.mjs';

export default class FormulaRequestPacket extends StructuredPacket {
    static id = 0;

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