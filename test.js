const  { Socket, Embed }  = require('./lib/index');

const client = new Socket("ODQ4MjA5MzI1NTcwNzg1MzEx.YLJSfg.Y1O3GfGH8bMZafONaVxkFnXxiFk")

client.on('READY', () => {
    console.log("Bot has been logged in.")
});

client.on('MESSAGE_CREATE', async (message) => {
    if(message.content === "!channelinfo"){
        message.react("✅")
        const embed = new Embed()
        embed.setAuthor("Hi")
        embed.setDescription("LOL")
        message.channel.sendMessage("Hi guys")
        message.channel.sendEmbed([embed], "hi");
    }
});
client.build()