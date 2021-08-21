import EventEmitter from 'events';
import WebSocket from 'ws';
import { URI } from './Constants';
import createPayload from './Payloads';

export class Socket extends EventEmitter {
  public token: string;
  public ws: WebSocket | null;
  public activity: string | null;
  private interval: any;
  private heartbeat: Function;

  constructor(token: string) {
    super();
    this.token = token;
    this.ws = new WebSocket(URI.GATEWAY);
    this.activity = null;
    this.interval = 0;

    this.heartbeat = (payload: string, ms: number) => {
      return setInterval(() => {
        this.ws?.send(payload);
      }, ms);
    };
  }

  async setActivity(activity: string) {
    this.activity = activity;
  }

  async build() {
    this.ws?.on('open', async () => {
      this.ws?.send(createPayload(2, this.token, 513));
    });
    this.ws?.on('message', async (message: string) => {
      const packet = JSON.parse(message);
      const { t: event, d, op } = packet;

      switch (op) {
        case 10:
          const { heartbeat_interval } = d;
          const payload = createPayload(1, this.token, 513);
          this.interval = this.heartbeat(payload, heartbeat_interval);
          break;
      }
      if(event !== null){
        const { default: module } = await import(
          `../handlers/${event}`
        );
        module(this, packet)
      }
    });
  }
}
