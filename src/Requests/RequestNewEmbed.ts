import fetch from "node-fetch";
import { Embed } from "../modules/Embed";
import { URI } from "../WebSocket/Constants";

export default async function RequestNewEmbed(token: string, channel: string, embeds: Array<Embed>, content?: string) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bot ${token}` };
    const data = {
        "content": content,
        "embeds": embeds,
        "tts": false,
    };
    const body = JSON.stringify(data);
    const res = await fetch(`${URI.API}/channels/${channel}/messages`, {
        method: 'POST',
        headers,
        body,
    })

    return res.json();
}