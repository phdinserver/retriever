export default class HandlerCenter {
    static #handlers = new Map();

    static registerHandler(packetConstructor, handler) {
        if (!this.#handlers.has(packetConstructor))
            this.#handlers.set(packetConstructor, []);
        this.#handlers.get(packetConstructor).push(handler);
    }

    static handle(packet, client) {
        if (!this.#handlers.has(packet.constructor))
            return;
        this.#handlers.get(packet.constructor).forEach(e => e(packet, client));
    }
}