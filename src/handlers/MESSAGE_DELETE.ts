import { Payload } from '../typings';

export default async function (client: any, payload: Payload){
    client.emit(payload.t, payload.d)
}