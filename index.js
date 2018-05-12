const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

    if (message.content === "cismec")
    {
      message.channel.send('AU BUCHER')
    }

});
client.login(process.env.BOT_TOKEN);
