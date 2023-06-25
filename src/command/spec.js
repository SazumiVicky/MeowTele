/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: Skrip ini tidak dijual.
*/

const os = require('os');
const { exec } = require('child_process');

module.exports = (bot) => {
  bot.onText(/\/(ping|spec)/, (msg, match) => {
    const chatId = msg.chat.id;
    const command = match[1];

    if (command === 'ping') {
      bot.sendMessage(chatId, '🔍 Search...').then((pingMsg) => {
        const start = Date.now();
        const latency = Date.now() - start;
        bot.editMessageText(`🐱 Bot latency: ${latency}ms`, {
          chat_id: chatId,
          message_id: pingMsg.message_id
        });
      });
    } else if (command === 'spec') {
      const hostname = os.hostname();
      const platform = os.platform();
      const arch = os.arch();
      const cpus = os.cpus();
      const totalMemory = os.totalmem();
      const networkSpeedCommand = 'curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python3 -';
      
      exec(networkSpeedCommand, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing speedtest command: ${error.message}`);
          bot.sendMessage(chatId, 'Failed to fetch network speed.');
          return;
        }
        
        const networkSpeed = JSON.parse(stdout);
        const { download, upload, ping } = networkSpeed;

        const specMessage = `Device Specification:\n\nHostname: ${hostname}\nPlatform: ${platform}\nArchitecture: ${arch}\n\nCPU Information:\n${JSON.stringify(cpus, null, 2)}\n\nTotal Memory: ${totalMemory} bytes\n\nNetwork Speed:\nDownload Speed: ${download} Mbps\nUpload Speed: ${upload} Mbps\nPing: ${ping} ms`;

        bot.sendMessage(chatId, specMessage);
      });
    }
  });
};
