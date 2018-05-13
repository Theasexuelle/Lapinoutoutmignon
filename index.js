const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame("Being cute");
});
client.on('message', message => {

    if (message.content.toUpperCase() === "Bonjour lapinou".toUpperCase())
    {
      message.channel.reply("Bonjour, personne géniale");
    }
    if (message.content.search("cismec") > -1)
        message.content('Au Bûcher 🔥 🔥 🔥 ');
   
    if (message.content === "!hug")
         message.channel.send("Câlin", {files: ["https://78.media.tumblr.com/3b6ccf23ecd9aeacfcce0add1462c7c0/tumblr_msxqo58vDq1se3f24o1_500.gif"]});

    if (message.content.search("!hug") === 0 && message.mentions.members.first()!= 'undefined')
         message.channel.send("Câlin"+message.mentions.members.first(), {files: ["https://78.media.tumblr.com/3b6ccf23ecd9aeacfcce0add1462c7c0/tumblr_msxqo58vDq1se3f24o1_500.gif"]});

});
client.login(process.env.BOT_TOKEN);
