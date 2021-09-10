import EventEmitter from "events";
import WebSocket, { ErrorEvent } from "ws";
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
          try {
            const { default: module } = await import(`../handlers/${event}`);
            module(this.client, packet);
          } catch (err) {
            console.log(`[DISCLIENT] ${err}`);
          }
        }
      });
    } catch (err) {
      console.log(`[Disclient] ${err}`);
    }
  }

  async UpdatePresence(msg: string, type: string, status: string | null) {
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

  private heartbeat = (payload: string, ms: number) => {
    return setInterval(() => {
      this.ws?.send(payload);
    }, ms);
  };
}
