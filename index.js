const config = require("./config.json")
const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
  console.log(`${bot.user.username} está online!`)
  bot.user.setActivity("integrado ao FiveM.", "https://twitch.tv/bidetti",  {type: "PLAYING"});
})

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}connected`) {
    return message.channel.send(`The ${bot.user.username} aren't connect with the FiveM Application Data.`)
  }
  if(cmd === `${prefix}botinfo`) {

    const embed = new Discord.MessageEmbed()
    .setTitle("<:bot:733443496513503343> **Bot Information** <:bot:733443496513503343>")
    .setColor("BLURPLE")
    .setThumbnail(bot.user.displayAvatarURL)
    .addFields(
      {name: 'Name', value: bot.user.username},
      {name: 'Created', value: bot.user.createdAt},
    )
    return message.channel.send(embed);
  }
  if(cmd === `${prefix}serverinfo`) {

    let sicon = message.guild.displayAvatarURL
    let embed = new Discord.MessageEmbed()
    .setTitle('<:bot:733443496513503343> **Server Information** <:bot:733443496513503343>')
    .setColor("BLURPLE")
    .setThumbnail(sicon)
    .addFields(
      {name: 'Name:', value: message.guild.name},
      {name: 'Created', value: message.guild.createdAt},
      {name: 'Joined', value: message.member.joinedAt},
      {name: 'Members', value: message.guild.memberCount}
      return message.channel.send(embed)
    )
  }
})

bot.login(config.token)
