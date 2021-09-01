/// <reference types="node" />
import EventEmitter from "events";
import { Client } from "../Client/Client";
export default class Socket extends EventEmitter {
    private client;
    token: string | null;
    private interval;
    private ws;
    constructor(client: Client, token: string);
    login(): Promise<void>;
    UpdatePresence(msg: string, type: string, status: string | null): Promise<void>;
    private heartbeat;
}
