const { cmd, commands } = require("../lib/command");

cmd(
  {
    pattern: "menu",
    alise: ["list"],
    desc: "Get command list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      pushname,
      reply,
    }
  ) => {
    try {
      let menuText = `𓆩 𝙳𝙸𝙽𝚄𝚆𝙷-𝙵𝚁𝙴𝙴_𝚇-𝙼𝙳 𓆪  
Simple & Powerful WhatsApp Bot  
Made By: 𝘿𝙄 𝙉𝙐 𝙒𝙃 - 𝙈𝘿

━━━━━━━━━━━━━━  
OWNER:  
wa.me//+94728899640?text=F-BOT  

මෙම බොට් එක 𝙁𝙍𝙀𝙀ව හදාගන්න ඕනෙ නම් උඩ number එකට msg එකක් දාන්න!

━━━━━━━━━━━━━━  

⚙️ MENU PANEL ⚙️  
> .menu – Show all commands  
> .alive – Bot active check  
> ping – Speed test 
> block
> unblock
> jid
> gjid
> setpp
> left
> kick
> add
> ,owner – Contact bot owner  
> ,channel – Our official channels  
> ,mute / ,unmute – Mute/unmute bot  

Extra Features:  
✓ Status Seen (Auto)  
✓ Status React/Like (Auto)
✓ Status Save cmd (save,dapan,evanna and other....)
✓ Anti Call enable (Auto)
- _other feture comming soon...

━━━━━━━━━━━━━━  

JOIN OUR WHATSAPP CHANNELS:

ᴛᴇᴄʜ ᴄʜᴀɴɴᴇʟ:  
https://whatsapp.com/channel/0029Vb5XXIfDp2Q3A5zeZb1d

ᴍᴜsɪᴄ ᴄʜᴀɴɴᴇʟ:  
https://whatsapp.com/channel/0029Vb3mqn5H5JLuJO3s3Z1J

sᴛᴀᴛᴜs ᴠɪᴅᴇᴏ ᴄʜᴀɴɴᴇʟ:  
https://whatsapp.com/channel/0029VaxVCPi96H4VOKai4S3s

━━━━━━━━━━━━━━  
ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪɴᴜᴡʜ ᴍᴅ
╭─━━━❰ *THANK YOU!* ❱━━━─╮
│ ⛦ *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪɴᴜᴡʜ ᴍᴅ* ⛦
╰───────────────────────╯
`;

      // Send the menu text without the external ad reply (no thumbnail)
      await robin.sendMessage(
        from,
        {
          text: menuText,
        },
        { quoted: m }
      );
    } catch (e) {
      console.log(e);
      reply(`Error: ${e.message}`);
    }
  }
);
