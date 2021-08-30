const discord = require('./lib/index');

const client = new discord.Client('ODEzNjQ5NjAzODQ4NDM3Nzcw.YDSYPg.3k2e-wBXs8ESMElE9OwL5U51FtU');

client.on('READY', () => {
  console.log(`${client.user.tag} is online`);
});

client.on('MESSAGE_CREATE', async message => {
  if (message.content === '!ping') {
    message.channel.reply('Pong');
  }
});
client.build();
