/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: Skrip ini tidak dijual.
*/

require('dotenv').config(); 
const TelegramBot = require('node-telegram-bot-api');
const ownerCommand = require('./src/command/owner');
const sourceCommand = require('./src/command/source');
const openaiCommand = require('./src/command/openai');
const specCommand = require('./src/command/spec');
const { printMessage } = require('./lib/print');
const config = require('./config');

const token = process.env.TOKEN; 

const bot = new TelegramBot(token, { polling: true });

ownerCommand(bot);
sourceCommand(bot);
openaiCommand(bot);
specCommand(bot);

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.username;
  const welcomeMessage = `👋 Halo *${username}*, selamat datang di bot MakeMeow! Senang bisa bertemu dengan kamu.`;
  bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
});

bot.on('message', (msg) => {
    printMessage(msg);
  });
  
