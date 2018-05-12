const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
   if (message.content.toUpperCase() == 'BONJOUR'||message.content.toUpperCase() == 'COUCOU'  ||message.content.toUpperCase() == 'SALUT')
    {
      message.channel.send(message.content+' à vous ♥ !')
      return;
    }

    if (message.content== "cismec")
    {
      message.channel.send('AU BUCHER'))
      return;
    }
    if (message.content== "cismec"("C'est qui le plus beau") != -1)
    {
      message.channel.send('Leo :heart:')
      return;
    }

});
client.login(process.env.BOT_TOKEN);
