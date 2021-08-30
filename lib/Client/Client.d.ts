/// <reference types="node" />
import EventEmitter from "events";
import RestApiHandler from "../RestApiHandler";
import Socket from "../WebSocket/Socket";
import ClientUser from "./ClientUser";
import ClientEvents from "./ClientEvents";
import Collection from "../modules/Collection";
import { Activities } from "../interfaces";
export declare interface Client {
    user: ClientUser;
    ws: Socket;
    rest: RestApiHandler;
    guilds: Collection<string, any>;
    channels: Collection<string, any>;
    users: Collection<string, any>;
    emojis: Collection<string, any>;
    on<Event extends keyof ClientEvents>(event: Event, listener: ClientEvents[Event]): this;
    off<Event extends keyof ClientEvents>(event: Event, listener: ClientEvents[Event]): this;
    emit<Event extends keyof ClientEvents>(event: Event, ...args: Parameters<ClientEvents[Event]>): boolean;
    build(): Promise<void>;
}
export declare type ActivityType = keyof typeof Activities;
export declare class Client extends EventEmitter {
    constructor(token: string);
    setActivity(message: string, type: ActivityType): Promise<void>;
}
