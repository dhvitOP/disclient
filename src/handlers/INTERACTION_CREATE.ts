import { Button, Embed } from "..";
import { Client } from "../Client/Client";
import { Interaction, Payload } from "../interfaces";

type options = {
  embeds?: Array<Embed>;
  components?: Array<Button>;
};

export default async function (client: Client, payload: Payload) {
  /**
   * Send a message to discord api
   * @param {string} content
   * @returns {object}
   */
  const sendMessage = (content: string | null, options: options) => {
    let res: any;
    if (options) {
      client.rest.sendMessagewithEmbedandButton(payload.d.channel_id, content, options.embeds, options.components);
    } else {
      res = client.rest.PostMessage(payload.d.channel_id, content);
    }
    return res;
  };
  const reply = (content: string, emphemeral?: boolean) => {
    if(!emphemeral) emphemeral = false;
    client.rest.createInteractionResponse(content, payload.d.token, payload.d.id, emphemeral);
  }
  const interaction: Interaction = {
    button: payload.d.type == 3 ? true : false,
    message: {
      tts: payload.d.message.tts,
      timestamp: payload.d.message.timestamp,
      pinned: payload.d.message.pinned,
      mentions: payload.d.message.mentions,
      mention_roles: payload.d.message.mention_roles,
      mention_everyone: payload.d.message.mention_everyone,
      id: payload.d.message.id,
      flags: payload.d.message.flags,
      embeds: payload.d.message.embeds,
      edited_timestamp: payload.d.edited_timestamp,
      content: payload.d.message.content,
      channel_id: payload.d.message.channel_id,
      author: {
        username: payload.d.message.author.username,
        public_flags: payload.d.message.author.public_flags,
        id: payload.d.message.author.id,
        discriminator: payload.d.message.author.discriminator,
        bot: payload.d.message.author.bot,
        avatar: payload.d.message.author.avatar,
      },
      attachments: payload.d.message.attachments,
    },
    member: {
      user: {
        username: payload.d.member.user.username,
        public_flags: payload.d.member.user.public_flags,
        id: payload.d.member.user.id,
        discriminator: payload.d.member.user.discriminator,
        avatar: payload.d.member.user.avatar,
      },
      roles: payload.d.member.roles,
      premium_since: payload.d.member.premium_since,
      permissions: payload.d.member.permissions,
      pending: payload.d.member.pending,
      nick: payload.d.member.nick,
      mute: payload.d.member.mute,
      joined_at: payload.d.member.joined_at,
      is_pending: payload.d.member.is_pending,
      deaf: payload.d.member.deaf,
      avatar: payload.d.member.avatar,
    },
    id: payload.d.id,
    guild_id: payload.d.guild_id,
    custom_id: payload.d.data.custom_id,
    channel_id: payload.d.channel_id,
    application_id: payload.d.application_id,
    sendMessage: sendMessage,
    reply: reply,
  };
  client.emit(payload.t, interaction);
}
