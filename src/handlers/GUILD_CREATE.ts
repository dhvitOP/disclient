import { Client } from '../Client/Client';
import { Payload } from '../interfaces';

export default async function (client: Client, payload: Payload){
    client.emit(payload.t, payload.d)
}