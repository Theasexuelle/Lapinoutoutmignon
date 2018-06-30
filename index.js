const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

/*bot.on("ready", async () => {
console.log(`${bot.user.username} est en ligne`);
bot.user.setGame("Fais la révolution");
});*/

/*bot.on("message", async message => {
if(nessage.author.bot) return;
if(message.channel.type === "dm") return;

let prefix = botconfig.prefix;

let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

if(cmd === `${prefix}hello`){
return message.channel.send("Hello!");

}

});

/*bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur ce serveur ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)

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

});*/
client.login(process.env.BOT_TOKEN);
