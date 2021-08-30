"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const events_1 = __importDefault(require("events"));
const RestApiHandler_1 = __importDefault(require("../RestApiHandler"));
const Socket_1 = __importDefault(require("../WebSocket/Socket"));
const Collection_1 = __importDefault(require("../modules/Collection"));
class Client extends events_1.default {
    constructor(token) {
        super();
        this.ws = new Socket_1.default(this, token);
        this.rest = new RestApiHandler_1.default(this.ws.token);
        this.guilds = new Collection_1.default();
        this.channels = new Collection_1.default();
        this.users = new Collection_1.default();
        this.emojis = new Collection_1.default();
    }
    /**
     * Logs in the client
     */
    async build() {
        try {
            this.ws.login();
        }
        catch (err) {
            console.log("[Disclient] %d", err);
        }
    }
    async setActivity(message, type) {
        try {
            this.ws.UpdatePresence(message, type, null);
        }
        catch (err) {
        }
    }
}
exports.Client = Client;