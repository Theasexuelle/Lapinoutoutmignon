const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {

    if (message.content === "kokio?")
    {
      message.channel.send("Lapinou aime Kokio ♥")
    }
    if (message.content.search("cismec") > -1)
        message.reply('Au Bûcher');
});
client.login(process.env.BOT_TOKEN);
