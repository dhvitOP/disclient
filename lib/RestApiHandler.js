"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const Constants_1 = require("./Constants");
class RestApiHandler {
    constructor(token) {
        this.token = token;
        this.token = token;
    }
    /**
     *
     * @returns {Array<object>} Channels
     */
    async fetchAllChannels() {
        const res = await node_fetch_1.default(`${Constants_1.URI.API}/channels`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        });
        return res.json();
    }
    /**
     *
     * @param {string} channelid
     * @returns {object} channel
     */
    async fetchOneChannel(channelid) {
        const res = await node_fetch_1.default(`${Constants_1.URI.API}/channels/${channelid}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        });
        return res.json();
    }
    /**
     *
     * @returns {Array<object>} guilds
     */
    async fetchGuilds() {
        const res = await node_fetch_1.default(`${Constants_1.URI.API}/guilds`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        });
        return res.json();
    }
    /**
     *
     * @param {string} guildId
     * @returns {object} guild
     */
    async fetchOneGuild(guildId) {
        const res = await node_fetch_1.default(`${Constants_1.URI.API}/guilds/${guildId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        });
        return res.json();
    }
    /**
     * @param {string} guildId
     * @returns {Array<object>} members
     */
    async fetchGuildMembers(guildId) {
        const res = await node_fetch_1.default(`${Constants_1.URI.API}/guilds/${guildId}/members`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        });
        res.json();
    }
    /**
     *
     * @param {string} memberId
     * @param {string} guildId
     * @returns {object} member
     */
    async fetchOneGuildMember(memberId, guildId) {
        const res = await node_fetch_1.default(`${Constants_1.URI.API}/guilds/${guildId}/members/${memberId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        });
        return res.json;
    }
    async PostMessage(channel, content) {
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` };
        const data = {
            "content": content,
            "tts": false,
        };
        const body = JSON.stringify(data);
        const res = await node_fetch_1.default(`${Constants_1.URI.API}/channels/${channel}/messages`, {
            method: "POST",
            headers,
            body,
        });
        return res.json();
    }
    async createReaction(channel, message, emoji) {
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` };
        const uri = `${Constants_1.URI.API}/channels/${channel}/messages/${message}/reactions/${emoji}/@me`;
        const encodeduri = encodeURI(uri);
        await node_fetch_1.default(encodeduri, {
            method: "PUT",
            headers,
        });
    }
    async deleteMessage(channel, message, reason) {
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}`, "X-Audit-Log-Reason": reason };
        await node_fetch_1.default(`${Constants_1.URI.API}/channels/${channel}/messages/${message}`, {
            method: "DELETE",
            headers,
        });
    }
    async replyMessage(channel, message, content) {
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` };
        const data = {
            "content": content,
            "message_reference": {
                "message_id": message
            },
            "tts": false,
        };
        const body = JSON.stringify(data);
        const res = await node_fetch_1.default(`${Constants_1.URI.API}/channels/${channel}/messages`, {
            method: "POST",
            headers,
            body,
        });
        return res.json();
    }
    async sendMessagewithEmbedandButton(channel, content, embeds, components) {
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` };
        const data = {
            "content": content,
            "embeds": embeds,
            "components": [
                {
                    "type": 1,
                    "components": components
                }
            ],
            "tts": false,
        };
        const body = JSON.stringify(data);
        const res = await node_fetch_1.default(`${Constants_1.URI.API}/channels/${channel}/messages`, {
            method: "POST",
            headers,
            body,
        });
        return res.json();
    }
}
exports.default = RestApiHandler;
