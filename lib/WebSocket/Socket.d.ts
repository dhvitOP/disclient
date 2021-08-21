/// <reference types="node" />
import EventEmitter from 'events';
import WebSocket from 'ws';
export declare class Socket extends EventEmitter {
    token: string;
    ws: WebSocket | null;
    activity: string | null;
    private interval;
    private heartbeat;
    constructor(token: string);
    setActivity(activity: string): Promise<void>;
    build(): Promise<void>;
}
