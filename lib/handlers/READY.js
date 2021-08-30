"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientUser_1 = __importDefault(require("../Client/ClientUser"));
async function default_1(client, payload) {
    client.user = new ClientUser_1.default(payload.d.user.username, payload.d.user.discriminator, payload.d.user.verified, payload.d.user.id, payload.d.user.flags, payload.d.email, payload.d.user.bot, payload.d.user.avatar);
    client.emit(payload.t, null);
}
exports.default = default_1;
