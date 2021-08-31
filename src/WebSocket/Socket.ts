import EventEmitter from "events";
import WebSocket from "ws";
import { Client } from "../Client/Client";
import { URI } from "../Constants";
import createPayload from "./Payloads";

export default class Socket extends EventEmitter {
  public token!: string | null;
  private interval: any = 0;
  private ws: WebSocket | undefined;

  constructor(private client: Client, token: string) {
    super();
    this.token = token;
    this.ws = new WebSocket(URI.GATEWAY);
  }

  async login() {
    try {
      const { token } = this;

      this.ws?.on("open", async () => {
        this.ws?.send(createPayload(2, token, 513));
      });

      this.ws?.on("message", async (message: string) => {
        const packet = JSON.parse(message);
        const { t: event, d, op } = packet;

        switch (op) {
          case 10:
            const { heartbeat_interval } = d;
            const payload = createPayload(1, this.token, 513);
            this.interval = await this.heartbeat(payload, heartbeat_interval);
            break;
        }

        if (event !== null) {
          const { default: module } = await import(`../handlers/${event}`);
          module(this.client, packet);
        }
      });
    } catch (err) {
      console.log(`[Disclient] ${err.stack}`);
    }
  }
  async UpdatePresence(msg: string, type: number | any, status: string | null) {
    const data = {
      op: 3,
      d: {
        since: Date.now(),
        activities: [
          {
            name: msg,
            type: type,
          },
        ],
        status: status,
        afk: false,
      },
    };
    this.ws?.send(JSON.stringify(data));
  }

  private heartbeat = (payload: string, ms: number) => {
    return setInterval(() => {
      this.ws?.send(payload);
    }, ms);
  };
}
