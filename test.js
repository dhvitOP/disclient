const { Client, Button, Embed } = require("./lib/index");

const client = new Client("TOKEN");

client.on("READY", () => {
  console.log(`${client.user.tag} is online`);
  client.setActivity(`My name is ${client.user.tag}`, "PLAYING");
});

client.on("MESSAGE_CREATE", async message => {
  if (message.content === "_ping") {
    const button = new Button()
    button.setLabel("Hello")
    button.setStyle("Danger")
    button.setDisabled(false)
    button.setID("Helo")
    const button1 = button.create;
    message.channel.sendMessage("Helo", { embeds: null, components: [button1] });
  }
});

client.on("INTERACTION_CREATE", async (interaction) => {
  return interaction.sendMessage("Hello! you clicked the button")
});
client.build();
