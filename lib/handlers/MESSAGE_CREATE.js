"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(client, payload) {
    /**
     * Send a message to discord api
     * @param {string} content
     * @returns {object}
     */
    const sendMessage = (content, options) => {
        let res;
        if (options) {
            client.rest.sendMessagewithEmbedandButton(payload.d.channel_id, content, options.embeds, options.components);
        }
        else {
            res = client.rest.PostMessage(payload.d.channel_id, content);
        }
        return res;
    };
    /**
     * Deletes a message in a channel
     * @param {string} reason
     */
    const deleteMessage = (reason) => {
        client.rest.deleteMessage(payload.d.channel_id, payload.d.id, reason);
    };
    /**
     * The Emoji to react
     * @param {string} emoji
     */
    const reactMessage = (emoji) => {
        client.rest.createReaction(payload.d.channel_id, payload.d.id, emoji);
    };
    /**
     * Get channel and the details of the channel
     * @returns {object} channel
     */
    const get = () => {
        const res = client.rest.fetchOneChannel(payload.d.channel_id);
        return res;
    };
    const replyMessage = (content) => {
        const res = client.rest.replyMessage(payload.d.channel_id, payload.d.id, content);
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
            sendMessage: sendMessage,
            get: get,
            reply: replyMessage
        }
    };
    client.emit(payload.t, message);
}
exports.default = default_1;
