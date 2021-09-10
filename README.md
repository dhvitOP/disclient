<p align="center">
<img  src="https://cdn.discordapp.com/attachments/832645510560743445/880330805010911232/disclient.png" alt="image not available" />
  <br>
<a href="https://github.com/disclient"><img src="https://img.shields.io/badge/github-disclient-blue?style=flat-square" /></a> <a href="https://github.com/tsdon0001"><img src="https://img.shields.io/badge/Maintainer-tsdon0001-brightgreen?style=flat-square&color=blueviolet" /></a>
<br>
  <img src="https://img.shields.io/badge/Madewith-Typescript-blue?style=flat-square" />
</p>
<h3><ins>What is this?</ins></h3>
disclient is a discord api wrapper in which you can use it to post or recieve requests to the <a href="https://discord.com/developers/docs/topics/gateway/topics/gateway">discord gateway</a>,  and the <a href="https://discord.com/developers/docs/reference">discord api</a>
<br>
# I am sorry but botlist nahi bana sakta
<h3><ins>How do i Install?</ins></h3>

```sh-session
npm i disclient --save
yarn add --save disclient
```
<h2>Better to explain with examples</h2>
<h3>Logging in :</h3>

```JS
const { Client } = require("disclient");
const bot = new Client("SECRET-TOKEN");

bot.build().then(() => {
  console.log("bot logged in")
});
```
<h3>Events :</h3>

```JS
const { Client } = require("disclient");
const bot = new Client("SECRET-TOKEN");

bot.on("READY", () => {
  console.log("Bot logged in");
});
 
// it was not good to console.log after the bot.build() function so just do the console.log in the READY event.
bot.build();
```
<h3>Listening to Messages :</h3>

```JS
const { Client } = require("disclient");
const bot = new Client("SECRET-TOKEN");

bot.on("READY", () => {
  console.log(`${bot.user.tag} is online`);
});

bot.on("MESSAGE_CREATE", async (message) => {
  console.log(message.content);
});

bot.build();
```
<h3>Creating Messages :</h3>

```JS
const { Client } = require("disclient");
const bot = new Client("SECRET-TOKEN");

bot.on("READY", () => {
  console.log(`${bot.user.tag} is online`);
});

bot.on("MESSAGE_CREATE", async (message) => {
  if(message.content === "!ping"){
    message.channel.sendMessage("Pong!")
  }
});

bot.build();
```
<h3>Replying to message :</h3>

```JS
const { Client } = require("disclient");
const bot = new Client("SECRET-TOKEN");

bot.on("READY", () => {
  console.log(`${bot.user.tag} is online`);
});

bot.on("MESSAGE_CREATE", async (message) => {
  if(message.content === "!hello"){
    message.channel.reply("Hello World");
  }
});

bot.build();
```
<h3>Sending Embeds :</h3>

```JS
const { Client, Embed } = require("disclient");
const bot = new Client("SECRET-TOKEN");

bot.on("READY", () => {
  console.log(`${bot.user.tag} is online`);
});

bot.on("MESSAGE_CREATE", async (message) => {
  if(message.content === "!ping"){
    const embed = new Embed()
    embed.setTitle("Pong!")
    embed.setDescription("This is the desc")
    const embed1 = embed.create();

    message.channel.sendMessage("Some Message", { embeds: [embed1] });
  }
});

bot.build();
```
<h3>Reacting to Message :</h3>

```JS
const { Client } = require("disclient");
const bot = new Client("SECRET-TOKEN");

bot.on("READY", () => {
  console.log(`${bot.user.tag} is online`);
});

bot.on("MESSAGE_CREATE", async (message) => {
  if(message.content === "!react"){
    message.react("😂");
  }
});

bot.build();
```

<h2><ins>Contributors</ins></h2>
<ul>
<li>Don Baba#1818</li>
<li>SAURABH#0777</li>
<li>ΔH〢< Ayaan />#0001</li>
<li>! BOYFRIEND 🍁#8831</li>
</ul>
