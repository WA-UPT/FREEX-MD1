
const { cmd } = require("../lib/command");

cmd(
  {
    pattern: "alive",
    desc: "Check if the bot is active",
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
      // Alive message with details
      let aliveMessage = `🟢 **𝙳𝙸𝙽𝚄𝚆𝙷 𝙼𝙳 BOT** is **active**!  
Bot is online and functioning properly.

👤 **Owner**: DINUWH 
📱 **Contact Owner**: wa.me//+94728899640  

ෆ්‍රී බොට් හදාගන්න මැසෙජ් එකක් දාන්න....

📢 **Join our official channels**:

🔹 **Tech Channel**:  
https://whatsapp.com/channel/0029Vb5XXIfDp2Q3A5zeZb1d

🔹 **Music Channel**:  
https://whatsapp.com/channel/0029Vb3mqn5H5JLuJO3s3Z1J

🔹 **Status Video Channel**:  
https://whatsapp.com/channel/0029VaxVCPi96H4VOKai4S3s

━━━━━━━━━━━━━━  
Powered by 𝙳𝙸𝙽𝚄𝚆𝙷 𝙼𝙳`;

      // Send the Alive message with detailed info
      await robin.sendMessage(from, { text: aliveMessage }, { quoted: m });
    } catch (e) {
      console.log(e);
      reply(`Error: ${e.message}`);
    }
  }
);
