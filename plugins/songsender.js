const { cmd, commands } = require("../lib/command");
const config = require('../settings')
const yts = require("yt-search");
const { ytmp3 } = require("@vreden/youtube_scraper");

cmd(
  {
    pattern: "vice",
    react: "🎵",
    desc: "Download Song",
    category: "download",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      if (!q) return reply("නමක් හරි ලින්ක් එකක් හරි දෙන්න 🌚❤️");

      const search = await yts(q);
      if (!search.videos.length) return reply("❌ Video not found!");

      const data = search.videos[0];
      const url = data.url;

      const desc = `〲🎶𝙽𝙾𝚆 𝚄𝙿𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚂𝙾𝙽𝙶👆...㋞||🕊️

♧ ||𝚃𝙸𝙼𝙴    : *${data.timestamp}*      
♢ ||𝚄𝙿𝙻𝙾𝙰𝙳  : *${data.ago}*
♡ ||𝚅𝙸𝙴𝚆𝚂   : *${data.views}*
♤ ||𝚄𝚁𝙻     : *${data.url}*
> //#DιηᵤW 🅱🅱🅷 ㋛☚

* *🖇️ALL MUSIC PLAY LIST 👇*
_https://whatsapp.com/channel/0029Vb3mqn5H5JLuJO3s3Z1J_

~|| 💛💙💚🖤 👈||මේ පාට හතරින්. රියැක්ට් කරන්නහ් ළමයෝ...😚💖~
`;

      // Send thumbnail + metadata
      await robin.sendMessage(
        from,
        {
          image: { url: data.thumbnail },
          caption: desc,
        },
        { quoted: mek }
      );
      
      
      // Download song (only send as PTT)
      const quality = "64";
      const songData = await ytmp3(url, quality);

      if (!songData || !songData.download || !songData.download.url) {
        return reply("❌ Failed to download the song!");
      }
   
      await robin.sendMessage(
        from,
        {
          audio: { url: songData.download.url },
          mimetype: "audio/mpeg",
          ptt: true,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error(e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);

cmd(
  {
    pattern: "voicej",
    react: "🎵",
    desc: "Download Song",
    category: "download",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      if (!q) return reply("නමක් හරි ලින්ක් එකක් හරි දෙන්න 🌚❤️");

      const search = await yts(q);
      if (!search.videos.length) return reply("❌ Video not found!");

      const data = search.videos[0];
      const url = data.url;

      const desc = `*☘️ ᴛɪᴛʟᴇ : ${data.title} 🙇‍♂️🫀🎧*
    
📅 ᴀɢᴏ   : ${data.ago}    
⏱️ ᴛɪᴍᴇ  : ${data.timestamp}   
🎭 ᴠɪᴇᴡꜱ : ${data.views}
➣ ᴛʏᴘᴇ  : ᴀᴜᴅɪᴏ ᴄᴏɴᴠᴇʀᴛ
🔗 ᴜʀʟ   : ${data.url} 

> *Use headphones for best experience🎧🎶💆‍♂️*

*👇🏻මේ වගේ ලස්සන සිංදු අහන්න මෙන්න මෙහෙට එන්ඩ අනේහ්....*😚💕"

*🌟 𝗙𝗼𝗹𝗹𝗼𝘄 𝗨𝘀 -* ${config.WACHLINK} 

${config.FOOTER}
`;

      // Send thumbnail + metadata
      await robin.sendMessage(
        config.JID,
        {
          image: { url: data.thumbnail },
          caption: desc,
        },
        { quoted: mek }
      );
      
      await robin.sendMessage(from, { text : 'Details Card Sended ✔' }, { quoted: mek }) 

      // Download song (only send as PTT)
      const quality = "64";
      const songData = await ytmp3(url, quality);

      if (!songData || !songData.download || !songData.download.url) {
        return reply("❌ Failed to download the song!");
      }
      
      await robin.sendMessage(
        config.JID,
        {
          audio: { url: songData.download.url },
          mimetype: "audio/mpeg",
          ptt: true,
        },
        { quoted: mek }
      )
      
      await robin.sendMessage(from, { text : 'Song Sended Check Your Jid ✔' }, { quoted: mek });
      
    } catch (e) {
      console.error(e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);
