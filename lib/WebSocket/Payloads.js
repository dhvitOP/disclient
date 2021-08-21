"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createPayload = (opcode, token, intents) => {
    const data = {
        op: opcode,
        d: {
            token: token,
            intents: intents,
            properties: {
                $os: process.platform,
                $browser: "DisClient",
                $device: "DisClient"
            }
        }
    };
    return JSON.stringify(data);
};
exports.default = createPayload;
