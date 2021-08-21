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
const RequestDeleteMessage_1 = __importDefault(require("../Requests/RequestDeleteMessage"));
const RequestGetChannel_1 = __importDefault(require("../Requests/RequestGetChannel"));
const RequestNewEmbed_1 = __importDefault(require("../Requests/RequestNewEmbed"));
const RequestNewMessage_1 = __importDefault(require("../Requests/RequestNewMessage"));
const RequestNewReaction_1 = __importDefault(require("../Requests/RequestNewReaction"));
function default_1(client, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        /**
         * Send a message to discord api
         * @param {string} content
         * @returns {object}
         */
        const sendMessage = (content) => {
            let res;
            res = RequestNewMessage_1.default(client.token, payload.d.channel_id, content);
            return res;
        };
        /**
         * Deletes a message in a channel
         * @param {string} reason
         */
        const deleteMessage = (reason) => {
            RequestDeleteMessage_1.default(payload.d.id, client.token, payload.d.channel_id, reason);
        };
        /**
         * The Emoji to react
         * @param {string} emoji
         */
        const reactMessage = (emoji) => {
            RequestNewReaction_1.default(emoji, payload.d.id, client.token, payload.d.channel_id);
        };
        /**
         * Get channel and the details of the channel
         * @returns {object} channel
         */
        const get = () => {
            const res = RequestGetChannel_1.default(client.token, payload.d.channel_id);
            return res;
        };
        /**
         *
         * @param {Array<Embed>} embeds
         * @param {string} content
         * @returns {object}
         */
        const sendEmbed = (embeds, content) => {
            const res = RequestNewEmbed_1.default(client.token, payload.d.channel_id, embeds, content);
            return res;
        };
        /**
         * @typedef {Message} message
         */
        const message = {
            author: payload.d.author,
            id: payload.d.id,
            member: payload.d.member,
            mentions: payload.d.mentions,
            mention_roles: payload.d.mention_roles,
            pinned: payload.d.pinned,
            timestamp: payload.d.timestamp,
            tts: payload.d.tts,
            content: payload.d.content,
            delete: deleteMessage,
            react: reactMessage,
            channel: {
                id: payload.d.channel_id,
                sendEmbed: sendEmbed,
                sendMessage: sendMessage,
                get: get,
            }
        };
        client.emit(payload.t, message);
    });
}
exports.default = default_1;
