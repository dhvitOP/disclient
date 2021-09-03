import { Button } from "./modules/Button";
import { Embed } from "./modules/Embed";
export default class RestApiHandler {
    private token;
    constructor(token: string | null);
    /**
     *
     * @returns {Array<object>} Channels
     */
    fetchAllChannels(): Promise<any>;
    /**
     *
     * @param {string} channelid
     * @returns {object} channel
     */
    fetchOneChannel(channelid: string): Promise<any>;
    /**
     *
     * @returns {Array<object>} guilds
     */
    fetchGuilds(): Promise<any>;
    /**
     *
     * @param {string} guildId
     * @returns {object} guild
     */
    fetchOneGuild(guildId: string): Promise<any>;
    /**
     * @param {string} guildId
     * @returns {Array<object>} members
     */
    fetchGuildMembers(guildId: string): Promise<void>;
    /**
     *
     * @param {string} memberId
     * @param {string} guildId
     * @returns {object} member
     */
    fetchOneGuildMember(memberId: string, guildId: string): Promise<() => Promise<any>>;
    PostMessage(channel: string, content: string | null): Promise<any>;
    createReaction(channel: string, message: string, emoji: string): Promise<void>;
    deleteMessage(channel: string, message: string, reason: string): Promise<void>;
    replyMessage(channel: string, message: string, content: string): Promise<any>;
    sendMessagewithEmbedandButton(channel: string, content: string | null, embeds?: Array<Embed>, components?: Button[]): Promise<any>;
}
