// server.js
const { create } = require('venom-bot');

create({
  session: 'mai-qr-bot'
})
  .then((client) => {
    console.log('✅ Cliente iniciado correctamente');
    client.onMessage(async (message) => {
      if (message.body === 'hola' && message.isGroupMsg === false) {
        client.sendText(message.from, 'Hola 👋 soy MAI QR, ¿en qué te puedo ayudar?');
      }
    });
  })
  .catch((erro) => {
    console.error('❌ Error al iniciar el bot:', erro);
  });
