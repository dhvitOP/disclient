import { Client } from '../Client/Client';
import { Payload } from '../interfaces';
import { Message } from '../interfaces';

export default async function (client: Client, payload: Payload){
    /**
     * Send a message to discord api
     * @param {string} content
     * @returns {object}
     */
     const sendMessage = (content: string) => {
        const res = client.rest.PostMessage(payload.d.channel_id, content)
        return res;
    }
    /**
     * Deletes a message in a channel
     * @param {string} reason 
     */
    const deleteMessage = (reason: string) => {
        client.rest.deleteMessage(payload.d.channel_id, payload.d.id, reason)
    }
    /**
     * The Emoji to react
     * @param {string} emoji 
     */
    const reactMessage = (emoji: string) => {
        client.rest.createReaction(payload.d.channel_id, payload.d.id, emoji)
    }
    /**
     * Get channel and the details of the channel
     * @returns {object} channel
     */
    const get = () => {
        const res = client.rest.fetchOneChannel(payload.d.channel_id)
        return res;
    }
    const replyMessage = (content: string) => {
        const res = client.rest.replyMessage(payload.d.channel_id, payload.d.id, content);
        return res;
    }
    /**
     * @typedef {Message} message
     */
    const message: Message = {
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
    }
    client.emit(payload.t, message)
}