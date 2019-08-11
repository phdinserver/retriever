import StructuredPacket from '../../rmpitils/src/StructuredPacket.mjs';

export default class SchoolMealRespondPacket extends StructuredPacket {
    static id = 3;

    #mealText = '';

    decode() {
        super.decode();
        this.#mealText = this.wbuf.readLString();
    }

    encode() {
        super.encode();
        this.wbuf.writeLString(this.#mealText);
    }

    getEstimatedSize() {
        return 8 + Buffer.from(this.#mealText, 'utf8').length;
    }

    setMealText(str) {
        this.#mealText = str;
        this.encode();
    }

    getMealText() {
        return this.#mealText;
    }
}