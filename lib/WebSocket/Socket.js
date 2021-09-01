"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const ws_1 = __importDefault(require("ws"));
const Constants_1 = require("../Constants");
const Payloads_1 = __importDefault(require("./Payloads"));
class Socket extends events_1.default {
    constructor(client, token) {
        super();
        this.client = client;
        this.interval = 0;
        this.heartbeat = (payload, ms) => {
            return setInterval(() => {
                this.ws?.send(payload);
            }, ms);
        };
        this.token = token;
        this.ws = new ws_1.default(Constants_1.URI.GATEWAY);
    }
    async login() {
        try {
            const { token } = this;
            this.ws?.on("open", async () => {
                this.ws?.send(Payloads_1.default(2, token, 513));
            });
            this.ws?.on("message", async (message) => {
                const packet = JSON.parse(message);
                const { t: event, d, op } = packet;
                switch (op) {
                    case 10:
                        const { heartbeat_interval } = d;
                        const payload = Payloads_1.default(1, this.token, 513);
                        this.interval = await this.heartbeat(payload, heartbeat_interval);
                        break;
                }
                if (event !== null) {
                    try {
                        const { default: module } = await Promise.resolve().then(() => __importStar(require(`../handlers/${event}`)));
                        module(this.client, packet);
                    }
                    catch (err) {
                        console.log("[DISCLIENT] %d", err);
                    }
                }
            });
        }
        catch (err) {
            console.log(`[Disclient] ${err.stack}`);
        }
    }
    async UpdatePresence(msg, type, status) {
        let activitytype;
        switch (type) {
            case "PLAYING":
                activitytype = 0;
                break;
            case "STREAMING":
                activitytype = 1;
                break;
            case "LISTENING":
                activitytype = 2;
                break;
            case "WATCHING":
                activitytype = 3;
                break;
            case "CUSTOM":
                activitytype = 4;
                break;
            case "COMPETING":
                activitytype = 5;
                break;
        }
        const data = {
            op: 3,
            d: {
                since: Date.now(),
                activities: [
                    {
                        name: msg,
                        type: activitytype,
                    },
                ],
                status: "online",
                afk: false,
            },
        };
        this.ws?.send(JSON.stringify(data));
    }
}
exports.default = Socket;
