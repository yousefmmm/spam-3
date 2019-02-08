const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543484302873198592")
setInterval(function() {
channel.send(`كوريدت هه بم`);
}, 30)
})

client.login("NTI5MDczMjc3MzMxODMyODMy.Dz9ORg.D5CUeWxsAIVMA6m60YG0ZOhL3iU");
