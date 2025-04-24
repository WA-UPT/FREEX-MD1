// Required Imports
const axios = require('axios');
const fs = require("fs");
const config = require('../settings');
const { cmd } = require('../lib/command');
const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason,
  makeCacheableSignalKeyStore,
  delay,
  getContentType,
  downloadContentFromMessage,
  proto,
  jidDecode
} = require('@whiskeysockets/baileys');

// Command Definition
cmd({
  pattern: "channelreact",
  alias: ["chr"],
  react: "📕",
  use: ".channelreact <channel_link>,<reaction>",
  desc: "React to a message in a WhatsApp channel",
  category: "owner",
  filename: __filename,
},
async (conn, mek, m, {
  q, reply
}) => {
  try {
    // Only bot session owner can use
    if (m.sender !== conn.user.id) {
      return reply("මේ කමාන්ඩ් එක භාවිතා කරන්න පුළුවන් bot session owner ට විතරයි!");
    }

    if (!q.includes(",")) return reply("උදාහරණය: .channelreact <channel_link>,<reaction>");

    let link = q.split(",")[0].trim();
    let react = q.split(",")[1].trim();

    if (!link.includes("whatsapp.com/channel/")) return reply("වැරදි channel link එකක්!");

    const channelId = link.split('/')[4];
    const messageId = link.split('/')[5];

    const res = await conn.newsletterMetadata("invite", channelId);
    await conn.newsletterReactMessage(res.id, messageId, react);

    reply("Reaction එක යවලා තියෙනව බං!");
  } catch (e) {
    console.log("ChannelReact Error: ", e);
    reply("Error එකක් ආව: " + e.message);
  }
});
