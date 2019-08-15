import { StructuredPacket } from '../../rmpitils/src/rmpitils.mjs';

export default class SchoolMealRespondPacket extends StructuredPacket {
  static id = 3;
  mealText; // LString

  decode() {
    super.decode();
    this.mealText = this.readLString();
  }

  encode() {
    super.encode();
    this.writeLString(this.mealText);
  }

  getEstimatedSize() {
    return Buffer.from(this.mealText, "utf8").length + 4;
  }
}