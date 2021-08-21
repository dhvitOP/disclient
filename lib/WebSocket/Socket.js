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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const events_1 = __importDefault(require("events"));
const ws_1 = __importDefault(require("ws"));
const Constants_1 = require("./Constants");
const Payloads_1 = __importDefault(require("./Payloads"));
class Socket extends events_1.default {
    constructor(token) {
        super();
        this.token = token;
        this.ws = new ws_1.default(Constants_1.URI.GATEWAY);
        this.activity = null;
        this.interval = 0;
        this.heartbeat = (payload, ms) => {
            return setInterval(() => {
                var _a;
                (_a = this.ws) === null || _a === void 0 ? void 0 : _a.send(payload);
            }, ms);
        };
    }
    setActivity(activity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.activity = activity;
        });
    }
    build() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = this.ws) === null || _a === void 0 ? void 0 : _a.on('open', () => __awaiter(this, void 0, void 0, function* () {
                var _c;
                (_c = this.ws) === null || _c === void 0 ? void 0 : _c.send(Payloads_1.default(2, this.token, 513));
            }));
            (_b = this.ws) === null || _b === void 0 ? void 0 : _b.on('message', (message) => __awaiter(this, void 0, void 0, function* () {
                const packet = JSON.parse(message);
                const { t: event, d, op } = packet;
                switch (op) {
                    case 10:
                        const { heartbeat_interval } = d;
                        const payload = Payloads_1.default(1, this.token, 513);
                        this.interval = this.heartbeat(payload, heartbeat_interval);
                        break;
                }
                if (event !== null) {
                    const { default: module } = yield Promise.resolve().then(() => __importStar(require(`../handlers/${event}`)));
                    module(this, packet);
                }
            }));
        });
    }
}
exports.Socket = Socket;
