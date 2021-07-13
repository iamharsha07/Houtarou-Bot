module.exports = async (client, guild) => {
  let channel = guild.channels.cache.find(
    channel =>
    channel.type === "text" &&
    channel.permissionsFor(guild.me).has("SEND_MESSAGES")
  );
  channel.send(`**Thank you for adding me!** :white_check_mark:\nPrefix for this server is hou.\nType hou help for more info!`);

  }