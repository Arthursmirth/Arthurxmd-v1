import connectToWhatsApp from './auth/authHandler.js';
import handleIncomingMessage from './events/messageHandler.js';
import reconnect from './events/reconnection.js';

import { startBot } from './events/bot.js'; 
import { MODE } from './config.js';
import isValidCode from './utils/validator.js';

// --- LANCEMENT GLOBAL DU SYSTÈME ARTHUR-XMD ---

(async () => {
    try {
        console.log("-----------------------------------------");
        console.log("🚀 INITIALISATION DE ARTHUR-XMD...");
        console.log("-----------------------------------------");

        // 1. LANCEMENT DE TELEGRAM (DÉBLOQUÉ)
        console.log("🤖 Tentative de démarrage du bot Telegram...");
        try {
            await startBot(); 
            console.log("✅ ARTHUR-XMD Telegram est en ligne !");
        } catch (teleError) {
            console.error("⚠️ Erreur Telegram (Vérifie ton Token) :", teleError.message);
        }

        // 2. LANCEMENT DE WHATSAPP
        console.log("📲 Connexion à WhatsApp en cours...");
        await connectToWhatsApp(handleIncomingMessage);
        console.log("✅ ARTHUR-XMD WhatsApp est opérationnel !");

        // Optionnel : système de reconnexion
        // await reconnect();

    } catch (globalError) {
        console.error("❌ Erreur critique au démarrage :", globalError.message);
    }
})();

// Note : J'ai supprimé la vérification de licence (le bloc "else") 
// pour que le bot Telegram s'allume directement pour toi.