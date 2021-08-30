import { Message } from "../interfaces";
export default interface ClientEvents {
    READY: () => void;
    MESSAGE_CREATE: (message: Message) => void;
    MESSAGE_UPDATE: (oldMessage: Message, newMessage: Message) => void;
    CHANNEL_CREATE: (channel: string) => void;
}
