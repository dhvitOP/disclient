const discord = require("./lib/index");

const client = new discord.Client("TOKEN");

client.on("READY", () => {
  console.log(`${client.user.tag} is online`);
});

client.on("MESSAGE_CREATE", async message => {
  if (message.content === "!ping") {
    const embed = new discord.Embed()
    embed.setTitle("Hello World")
    embed.setDescription("Hello message is  here by disclient")
    const embed1 = await embed.create();
    message.channel.sendMessage(null, { embeds: [embed1] })
  }
});
client.build();
