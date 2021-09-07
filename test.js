const { Client, Button, Embed } = require("./lib/index");

const client = new Client("");

client.on("READY", () => {
  console.log(`${client.user.tag} is online`);
  client.setActivity(`My name is ${client.user.tag}`, "PLAYING");
});

client.on("MESSAGE_CREATE", async message => {
  if(message.content.endsWith("!") && message.isLink()){
    message.channel.sendMessage("Message is a link")
  } else if(message.content.endsWith("!") && !message.isLink()){
    message.channel.sendMessage("Message is not a link")
  }
});

client.on("INTERACTION_CREATE", async (interaction) => {
  return interaction.sendMessage("Hello! you clicked the button")
});
client.build();
