import { Embed } from '../modules/Embed';
import RequestDeleteMessage from '../Requests/RequestDeleteMessage';
import RequestGetChannel from '../Requests/RequestGetChannel';
import RequestNewEmbed from '../Requests/RequestNewEmbed';
import RequestNewMessage from '../Requests/RequestNewMessage';
import RequestNewReaction from '../Requests/RequestNewReaction';
import { Message, Payload } from '../typings';

export default async function (client: any, payload: Payload){
    /**
     * Send a message to discord api
     * @param {string} content
     * @returns {object}
     */
    const sendMessage = (content: string) => {
        let res;
        res = RequestNewMessage(client.token, payload.d.channel_id, content)
        return res;
    }
    /**
     * Deletes a message in a channel
     * @param {string} reason 
     */
    const deleteMessage = (reason: string) => {
        RequestDeleteMessage(payload.d.id, client.token, payload.d.channel_id, reason)
    }
    /**
     * The Emoji to react
     * @param {string} emoji 
     */
    const reactMessage = (emoji: string) => {
        RequestNewReaction(emoji, payload.d.id, client.token, payload.d.channel_id)
    }
    /**
     * Get channel and the details of the channel
     * @returns {object} channel
     */
    const get = () => {
        const res = RequestGetChannel(client.token, payload.d.channel_id)
        return res;
    }
    /**
     * 
     * @param {Array<Embed>} embeds 
     * @param {string} content 
     * @returns {object}
     */
    const sendEmbed = (embeds: Array<Embed>, content?: string) => {
        const res = RequestNewEmbed(client.token, payload.d.channel_id, embeds, content)
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
            sendEmbed: sendEmbed,
            sendMessage: sendMessage,
            get: get,
        }
    }
    client.emit(payload.t, message)
}