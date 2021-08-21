export interface Payload {
  op: number;
  d: any;
  t: string;
  s: number;
}
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
    sendEmbed: Function,
    sendMessage: Function;
  };
}
