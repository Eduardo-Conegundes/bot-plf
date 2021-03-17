require("dotenv").config();

const commands = require("./commads")
const informations = require("./professores");
const Discord = require("discord.js");
const client = new Discord.Client({
    partials: ["MESSAGE"] //o bot terá acesso a coisas que aconteceram antes dele ser logado
});



const PREFIX = "!";
// const MOD_ME_COMMAND = "mod-me";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// client.on('message', msg => {
//     if(msg.content === "ping"){
//         msg.channel.send("Pong"); //não irá marcar o usuário
//         msg.reply("Pong"); //irá marcar o usuário
//     }
// });

client.on('messageDelete', msg => {
    msg.channel.send("Para de apagar mensagem fdp");
});

client.on('message', msg => {
    if(!msg.content.startsWith(PREFIX)) return;

    for(coman of commands){
        for(information of informations){

        }
    }
    if(msg.content === `${PREFIX}`){

        msg.channel.send("Carvalho");
    }
    
    

    if(msg.content === "Eu amo café"){
        msg.react("❤️");
    }

    if(msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`){
        modUser(msg.member)
        
    }
});

function modUser(member){
    member.roles.add("820329139747422209");
}

// client.login(process.env.BOT_TOKEN);