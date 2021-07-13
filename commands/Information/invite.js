// https://discord.com/oauth2/authorize?client_id=863744493932642334&scope=bot&permissions=7583170369

const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: ["link"],
    cooldown: 2,
    usage: "invite",
    description: "invitation link of bot",
run: async (client, message, args, user, text, prefix) => {
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Invite Me",
        "https://img.icons8.com/ultraviolet/2x/email-open--v2.gif"
      )
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(
        "Bot Invite - \nhttps://discord.com/oauth2/authorize?client_id=863744493932642334&scope=bot&permissions=7583170369\nServer Invite - \nhttps://discord.gg/F6uhJwcZ2t"
      )
  );
}
};