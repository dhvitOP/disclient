const discord = require('./lib/index');

const client = new discord.Client('TOKEN');

client.on('READY', () => {
  console.log(`${client.user.tag} is online`);
});

client.on('MESSAGE_CREATE', async message => {
  if (message.content === '!ping') {
    message.channel.reply('Pong');
  }
});
client.build();
