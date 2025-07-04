const express = require('express');
const { create } = require('venom-bot');
const app = express();

const PORT = process.env.PORT || 3000;

// Mini servidor HTTP para evitar el error 502 en Railway
app.get('/', (req, res) => {
  res.send('✅ MAI QR Bot está corriendo.');
});

app.listen(PORT, () => {
  console.log(`🌐 Servidor escuchando en puerto ${PORT}`);
});

// Bot de WhatsApp
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
