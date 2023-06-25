/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: Skrip ini tidak dijual.
*/

const axios = require('axios');
const config = require('../../config');

module.exports = (bot) => {
  bot.onText(/\/(ai|openai)(?:$|\s)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const command = match[1];
    const exampleMessage = `Example: .${command} how to create code html`;

    if (msg.text.trim().length === command.length + 1) {
      bot.sendMessage(chatId, exampleMessage);
      return;
    }

    const userInput = msg.text.substr(command.length + 2);
    const apiUrl = `https://api.lolhuman.xyz/api/openai-turbo?apikey=${config.lolhuman}&text=${encodeURIComponent(
      userInput
    )}`;

    try {
      const response = await axios.get(apiUrl);
      const result = response.data.result;

      bot.sendMessage(chatId, result);
    } catch (error) {
      console.error(error);
      bot.sendMessage(chatId, 'Terjadi kesalahan saat memproses permintaan.');
    }
  });
};
