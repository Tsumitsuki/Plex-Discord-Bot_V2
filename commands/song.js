module.exports = {
  name : 'song',
  command : {
    usage: '',
    description: 'displays current song',
    process: function(bot, client, message) {
      let messageLines = '';
      if (bot.songQueue.length > 0) {
        let embedObj = bot.songToEmbedObject(bot.songQueue[0]);
        message.channel.send({ content: bot.language.BOT_PLAYSONG_SUCCES, embeds: [embedObj] });
      }
      else {
        message.reply(bot.language.VIEWQUEUE_FAIL);
      }
    }
  }
};