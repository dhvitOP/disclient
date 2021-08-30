"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(client, payload) {
    client.emit(payload.t, payload.d);
}
exports.default = default_1;
