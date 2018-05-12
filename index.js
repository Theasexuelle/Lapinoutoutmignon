const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {

    if (message.content.toUpperCase() === "Bonjour lapinou".toUpperCase())
    {
      message.channel.reply("Bonjour, personne géniale");
    }
    if (message.content.search("cismec") > -1)
        message.content('Au Bûcher 🔥 🔥 🔥 ');
   
    if (message.content === "/hug")
        
});
client.login(process.env.BOT_TOKEN);
