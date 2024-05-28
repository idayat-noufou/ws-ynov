## Telegram Webhook API ##

Ce projet est une API Webhook simple utilisant Node.js et Express pour recevoir des messages de Telegram. Le bot utilise la bibliothèque `node-telegram-bot-api` pour interagir avec l'API Telegram.

## Prérequis

- Node.js (version 12 ou supérieure)
- Un compte Telegram
- Un bot Telegram et un jeton d'accès (obtenu via le BotFather)

## Installation

1. Clonez ce référentiel sur votre machine locale :

```bash
git clone https://github.com/votre-utilisateur/telegram-webhook-api.git
cd telegram-webhook-api
```

2. Installez les dépendances nécessaires :

``` npm install ```

## Configuration 
Remplacez ```YOUR_TELEGRAM_BOT_TOKEN ```dans le code par le jeton d'accès de votre bot Telegram. Vous pouvez obtenir ce jeton en créant un bot via le BotFather sur Telegram.

## Exécution
1. Démarrez le serveur :

```node app.js ```

2. Votre serveur Express devrait maintenant être en cours d'exécution et à l'écoute sur le port 4000 (ou un autre port si spécifié dans les variables d'environnement).

Lorsque votre bot Telegram reçoit un message, il répondra automatiquement avec "Received your message" et affichera le contenu du message dans la console.

