
const config = require('../settings')
const {cmd , commands} = require('../lib/command')



cmd({

    pattern: "settings",

    react: "☣️",

    alias: ["setting","env"],

    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`
*[ • CYBER VENOM SONG DL - SETTINGS‎ • ]*
*╭┈───────────────•*
*┊* *♾️ JID:* ➠ ${config.JID}
*┊* *♾️ WHATSAPP_CHANNEL:* ➠ ${config.WACHLINK} 
*┊* *♾️ FOOTER:* ➠ ${config.FOOTER} 
*┊* *♾️ LOGO:* ➠ ${config.LOGO} 
*┊* *♾️ OWNER_NUMBER:* ➠ ${config.OWNER_NUMBER} 
*┊* *♾️ PREFIX:* ➠ ${config.PREFIX} 
*╰┈───────────────•*
*•────────────•⟢*
${config.FOOTER}
*•────────────•⟢*
`


await conn.sendMessage(from,{image:{url:config.LOGO},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "broadcast",
    desc: "Broadcast a message to all groups.",
    category: "owner",
    react: "📢",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, args, reply }) => {
    if (!isOwner) return reply("❌ уσυ αяє ησт тнє σωηєя!");
    if (args.length === 0) return reply("📢 ρℓєαѕє ρяσνι∂є α мєѕѕαgє тσ вяσα∂¢αѕт.");

    const message = args.join(' ');
    const groups = Object.keys(await conn.groupFetchAllParticipating());

    for (const groupId of groups) {
        await conn.sendMessage(groupId, { text: message }, { quoted: mek });
    }

    reply("📢 мєѕѕαgє вяσα∂¢αѕтє∂ тσ αℓℓ gяσυρѕ.");
});