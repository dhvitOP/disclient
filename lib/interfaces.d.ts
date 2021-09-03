import { Button, Embed } from ".";
export interface Payload {
    op: number;
    d: any;
    t: any;
    s: number;
}
declare type options = {
    embeds?: Array<Embed>;
    components?: Array<Button>;
};
export interface Message {
    author: {
        id: string;
        username: string;
        discriminator: string;
        tag: string;
        avatar: string | null;
        public_flags: number | null;
    };
    id: string;
    member: {
        roles: [] | null;
        premium_since: Date | null;
        pending: boolean;
        nick: string | null;
        mute: boolean;
        joinedAt: Date | null;
        hoisted_role: [] | null;
        deaf: boolean;
        avatar: string | null;
    };
    mentions: Array<object>;
    mention_roles: Array<object>;
    pinned: boolean;
    timestamp: Date;
    tts: boolean;
    content: string;
    delete: Function;
    react: Function;
    channel: {
        id: string;
        get: any;
        sendMessage: (content: string | null, options: options) => any;
        reply: (content: string) => any;
    };
}
export declare enum Activities {
    PLAYING = 0,
    STREAMING = 1,
    LISTENING = 2,
    WATCHING = 3,
    CUSTOM = 4,
    COMPETING = 5
}
export interface Interaction {
    button: boolean;
    message: {
        tts: boolean;
        timestamp: Date;
        pinned: boolean;
        mentions: string[];
        mention_roles: string[];
        mention_everyone: boolean;
        id: string;
        flags: number;
        embeds: Embed[];
        edited_timestamp: Date | null;
        content: string;
        channel_id: string;
        author: {
            username: string;
            public_flags: number;
            id: string;
            discriminator: string;
            bot: boolean;
            avatar: string;
        };
        attachments: any[];
    };
    member: {
        user: {
            username: string;
            public_flags: number;
            id: string;
            discriminator: string;
            avatar: string;
        };
        roles: string[];
        premium_since: Date | null;
        permissions: number;
        pending: any | null;
        nick: string | null;
        mute: boolean;
        joined_at: Date;
        is_pending: boolean;
        deaf: boolean;
        avatar: string | null;
    };
    id: string;
    guild_id: string;
    custom_id: string | null;
    channel_id: string;
    application_id: string;
    sendMessage: (content: string | null, options: options) => any;
}
export {};
