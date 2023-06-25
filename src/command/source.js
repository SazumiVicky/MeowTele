/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: Skrip ini tidak dijual.
*/

module.exports = (bot) => {
    bot.onText(/\/script/, (msg) => {
      const chatId = msg.chat.id;
      const replyMessage = '😀 This is source code bot';
  
      const options = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Source Code',
                url: 'https://github.com/SazumiVicky/MeowTele',
              },
            ],
          ],
        },
      };
  
      bot.sendMessage(chatId, replyMessage, options);
    });
  };
  