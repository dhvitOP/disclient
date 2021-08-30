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
    on<Event extends keyof ClientEvents>(
        event: Event,
        listener: ClientEvents[Event],
      ): this;
    off<Event extends keyof ClientEvents>(
        event: Event,
        listener: ClientEvents[Event]
      ): this;
    emit<Event extends keyof ClientEvents>(
        event: Event,
        ...args: Parameters<ClientEvents[Event]>
    ): boolean;
    build(): Promise<void>;
}

export type ActivityType = keyof typeof Activities;

export class Client extends EventEmitter {
    constructor(token: string){
        super();
        this.ws = new Socket(this, token)
        this.rest = new RestApiHandler(this.ws.token)
        this.guilds = new Collection()
        this.channels = new Collection()
        this.users = new Collection()
        this.emojis = new Collection()
    }
    /**
     * Logs in the client
     */
    async build() {
        try {
            this.ws.login();
        } catch (err) {
            console.log("[Disclient] %d", err)
        }
    }
    async setActivity(message: string, type: ActivityType){
        try {
            this.ws.UpdatePresence(message, type, null)
        } catch(err){

        }
    }
}