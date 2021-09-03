import fetch from "node-fetch";
import { URI } from "./Constants";
import { Button } from "./modules/Button";
import { Embed } from "./modules/Embed";

export default class RestApiHandler {
    constructor(private token: string | null){
        this.token = token
    }

    /**
     * 
     * @returns {Array<object>} Channels
     */
    async fetchAllChannels(){
        const res = await fetch(`${URI.API}/channels`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        })

        return res.json()
    }
    /**
     * 
     * @param {string} channelid 
     * @returns {object} channel
     */
    async fetchOneChannel(channelid: string){
        const res = await fetch(`${URI.API}/channels/${channelid}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        })
        return res.json();
    }
    /**
     * 
     * @returns {Array<object>} guilds
     */
    async fetchGuilds(){
        const res = await fetch(`${URI.API}/guilds`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        })

        return res.json()
    }
    /**
     * 
     * @param {string} guildId 
     * @returns {object} guild
     */
    async fetchOneGuild(guildId: string){
        const res = await fetch(`${URI.API}/guilds/${guildId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        })

        return res.json();
    }
    /**
     * @param {string} guildId 
     * @returns {Array<object>} members
     */
    async fetchGuildMembers(guildId: string){
        const res = await fetch(`${URI.API}/guilds/${guildId}/members`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        });

        res.json()
    }
    /**
     * 
     * @param {string} memberId 
     * @param {string} guildId 
     * @returns {object} member
     */
    async fetchOneGuildMember(memberId: string, guildId: string){
        const res = await fetch(`${URI.API}/guilds/${guildId}/members/${memberId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
        });

        return res.json
    }
    async PostMessage(channel: string, content: string | null){
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` };
        const data = {
            "content": content,
            "tts": false,
        };
        const body = JSON.stringify(data);
        const res = await fetch(`${URI.API}/channels/${channel}/messages`, {
            method: "POST",
            headers,
            body,
        })
    
        return res.json();
    }
    async createReaction(channel: string, message: string, emoji: string){
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` };
        const uri = `${URI.API}/channels/${channel}/messages/${message}/reactions/${emoji}/@me`
        const encodeduri = encodeURI(uri);
    
        await fetch(encodeduri, {
            method: "PUT",
            headers,
        })
    }
    async deleteMessage(channel: string, message: string, reason: string){
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}`, "X-Audit-Log-Reason": reason };
        await fetch(`${URI.API}/channels/${channel}/messages/${message}`, {
            method: "DELETE",
            headers,
        })
    }
    async replyMessage(channel: string, message: string, content: string){
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` };
        const data = {
            "content": content,
            "message_reference": {
                "message_id": message
            },
            "tts": false,
        };
        const body = JSON.stringify(data);
        const res = await fetch(`${URI.API}/channels/${channel}/messages`, {
            method: "POST",
            headers,
            body,
        })
    
        return res.json();
    }
    async sendMessagewithEmbedandButton(channel: string, content: string | null, embeds?: Array<Embed>, components?: Button[]){
        const headers = { "Content-Type": "application/json", "Authorization": `Bot ${this.token}` }
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
        const res = await fetch(`${URI.API}/channels/${channel}/messages`, {
            method: "POST",
            headers,
            body,
        })
        return res.json();
    }
}