/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: Skrip ini tidak dijual.
*/

const chalk = require('chalk');

function printMessage(msg) {
  const senderName = msg.from.first_name;
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const messageDate = new Date(msg.date * 1000);
  const formattedDate = messageDate.toLocaleString();

  const logMessage = `${senderName} | ${formattedDate} | ${chatId} | ${messageText}`;

  console.log(chalk.bgYellow.black(logMessage));
}

module.exports = { printMessage };
