const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('message', function (message)
{
  if(message.author.bot) return;
  if (message.content.toUpperCase() == 'BONJOUR'||message.content.toUpperCase() == 'COUCOU'  ||message.content.toUpperCase() == 'SALUT')
    {
      message.channel.send(message.content+' à vous ♥ !')
      return;
    }

    if (message.channel.search('cismec') != -1)
    {
      message.channel.send('Leo :heart:'+message.channel.search('cismec'))
      return;
    }
    if (message.channel.search("C'est qui le plus beau") != -1)
    {
      message.channel.send('Leo :heart:')
      return;
    }

})
client.login(process.env.BOT_TOKEN);
