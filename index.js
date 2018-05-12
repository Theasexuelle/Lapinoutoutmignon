const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

  if (message.content== "kokio")
    {
      message.channel.send("C'est une personne trop cute ♥")
    }

});
client.login(process.env.BOT_TOKEN);
