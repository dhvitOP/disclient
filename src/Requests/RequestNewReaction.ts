import fetch from "node-fetch";
import { URI } from "../WebSocket/Constants";

export default async function RequestNewReaction(emoji: string, message: string, token: string, channel: string) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bot ${token}` };
    const uri = `${URI.API}/channels/${channel}/messages/${message}/reactions/${emoji}/@me`
    const encodeduri = encodeURI(uri);

    await fetch(encodeduri, {
        method: 'PUT',
        headers,
    })
}