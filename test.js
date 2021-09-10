const { Client, Button, Embed } = require("./lib/index");
const prefix = "!";
const client = new Client("ODEzNjQ5NjAzODQ4NDM3Nzcw.YDSYPg.P3zaTnESago_l-ZCPlfxgbA4LYY");

client.on("READY", async () => {
  console.log(`${client.user.tag} is online`);
  client.setActivity(`My name is ${client.user.tag}`, "PLAYING");
});

client.on("MESSAGE_CREATE", async (message) => {
  if(!message.content.startsWith(prefix)) return;
  switch(message.content){
    case `${prefix}test`:
      const button = new Button()
      button.setLabel("Hello World")
      button.setID("hello")
      button.setStyle("Primary")
      message.channel.sendMessage("click the button below!", { embeds: null, components: [button.create] })
    break;
  }
});

client.on("INTERACTION_CREATE", async (interaction) => {
  if(!interaction.button) return;
  switch(interaction.custom_id){
    case "hello":
      interaction.sendMessage("You clicked the button");
    break;
  }
});
client.build();
