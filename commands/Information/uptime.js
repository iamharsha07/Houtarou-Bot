const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { duration } = require("../../handlers/functions")
module.exports = {
    name: "uptime",
    category: "Information",
    aliases: [""],
    cooldown: 10,
    usage: "uptime",
    description: "Returns the duration on how long the Bot is online",
    run: async (client, message, args, user, text, prefix) => {
      message.channel.send(`${duration(client.uptime)}`)
    
    }
  }
