import { Socket, Message, Embed } from './lib/index';

const client = new Socket("ODQ4MjA5MzI1NTcwNzg1MzEx.YLJSfg.Y1O3GfGH8bMZafONaVxkFnXxiFk")

client.on('READY', () => {
    console.log("Bot has been logged in.")
});

client.on('MESSAGE_CREATE', async (message: Message) => {
    if(message.content === "!channelinfo"){
        message.react("✅")
        const embed = new Embed()
        embed.setColor(23123)
        embed.setAuthor("adasd")
        embed.setTitle("adasdad")
        embed.setType("rich")
        embed.setDescription("hello World");
        message.channel.sendEmbed([embed], "hi");
    }
});
client.build()