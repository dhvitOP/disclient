import fetch from "node-fetch";
import { URI } from "../WebSocket/Constants";

export default async function RequestDeleteMessage(message: string, token: string, channel: string, reason: string) {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bot ${token}`, 'X-Audit-Log-Reason': reason };
    await fetch(`${URI.API}/channels/${channel}/messages/${message}`, {
        method: 'DELETE',
        headers,
    })
}