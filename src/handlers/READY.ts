import { Client } from "../Client/Client";
import ClientUser from "../Client/ClientUser";
import { Payload } from "../interfaces";

export default async function (client: Client, payload: Payload){
    client.user = new ClientUser(
        payload.d.user.username,
        payload.d.user.discriminator,
        payload.d.user.verified,
        payload.d.user.id,
        payload.d.user.flags,
        payload.d.email,
        payload.d.user.bot,
        payload.d.user.avatar
    );
    client.emit(payload.t, null);
}