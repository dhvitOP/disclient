"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const Constants_1 = require("../Constants");
function RequestNewEmbed(token, channel, embeds, content) {
    return __awaiter(this, void 0, void 0, function* () {
        const headers = { 'Content-Type': 'application/json', 'Authorization': `Bot ${token}` };
        const data = {
            "content": content,
            "embeds": embeds,
            "tts": false,
        };
        const body = JSON.stringify(data);
        const res = yield node_fetch_1.default(`${Constants_1.URI.API}/channels/${channel}/messages`, {
            method: 'POST',
            headers,
            body,
        });
        return res.json();
    });
}
exports.default = RequestNewEmbed;