const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');

const token = '7363775208:AAHsgdpiPZfHmLNdWKMalpP4juJGri_eyBc';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message').then(() => {
        console.log(msg.text)
    });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
