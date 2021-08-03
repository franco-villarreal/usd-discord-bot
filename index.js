// import { Client, Intents } from 'discord.js';
import Discord from 'discord.js';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config()

const { TOKEN, DOLAR_API_BASE_URL } = process.env

// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async(msg) => {
    if (msg.content === 'dolarblue') {
        const dolarblue = await axios.get(`${DOLAR_API_BASE_URL}/dolarblue`)
        msg.reply(`$ ${dolarblue.data.compra}/ $ ${dolarblue.data.venta}`)
    }
});

client.login(TOKEN);