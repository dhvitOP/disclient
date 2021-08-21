import fetch from "node-fetch";
import { URI } from "../WebSocket/Constants";

export default async function RequestGetChannel(token: string, channel: string) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bot ${token}` };

    const res = await fetch(`${URI.API}/channels/${channel}`, {
        method: 'GET',
        headers,
    });

    return res.json();
}