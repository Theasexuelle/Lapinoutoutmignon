const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

  if (message.content === "kokio?")
    {
      message.channel.send("Lapinou aime Kokio ♥")
    }

});
client.login(process.env.BOT_TOKEN);
