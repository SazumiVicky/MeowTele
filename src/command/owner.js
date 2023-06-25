/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: Skrip ini tidak dijual.
*/

module.exports = (bot) => {
    bot.onText(/\/owner/, (msg) => {
      const chatId = msg.chat.id;
      const ownerUsername = 'sazumiviki';
      const replyMessage = `🐱 This is my owner\n`;
  
      const options = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'OWNER',
                url: `https://t.me/${ownerUsername}`,
              },
            ],
          ],
        },
      };
  
      bot.sendMessage(chatId, replyMessage, options);
    });
  };
  