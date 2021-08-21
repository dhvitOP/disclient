import fetch from "node-fetch";
import { URI } from "../WebSocket/Constants";

export default async function RequestNewMessage(token: string, channel: string, content?: string) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bot ${token}` };
    const data = {
        "content": content,
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