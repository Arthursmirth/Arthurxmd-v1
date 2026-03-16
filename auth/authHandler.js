import configManager from '../utils/manageConfigs.js';

import readline from 'readline';

import startSession from '../utils/connector.js'

async function promptUserNumber() {

    return new Promise((resolve) => {

        const rl = readline.createInterface({

            input: process.stdin,

            output: process.stdout,

        });

        rl.question('', (number) => {

            rl.close();

            resolve(number.trim());
        });
    });
}


async function connectToWhatsApp(handleMessage) {

    console.log(`
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⣶⣶⣶⣶⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣶⣶⣶⣶⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀
⠀⠀⠀⠀⠀⣼⣿⣿⣿⡿⢿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⡿⢿⣿⣿⣿⣿⣧⠀⠀
⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣶⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣶⣿⣿⣿⣿⠟⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠛⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠛⠛⠛⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠻⠿⠿⠿⠿⠿⠟⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                  🎭  A R T H U R  🎭

               ✅ HELLO WORLD FROM DEV ARTHUR
    `);

    console.log("📱 Enter your WhatsApp number (with country code, e.g., 509xxxx): ");

    const primary = configManager.config?.users["root"]?.primary;

    if (!primary) {

        const number = await promptUserNumber();

        await startSession(number, handleMessage, true);

    } else {

        const number = primary;

        await startSession(number, handleMessage, false);
    }
  
}


export default connectToWhatsApp;
