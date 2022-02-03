const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const db = require("quick.db");


module.exports = {
name: "coin-sil",
async execute(client, message, args) {
const coin = db.fetch(`coin_${message.author.id}`)
  
if (message.author.id !== "917892530744479814" &&message.author.id !=="509417115439071233")
return message.channel.send(`<:reddet:933625465766301728>** Sen Voxic & Gravity Değilsin Bu Komutu Kullanamazsın!**`);
let member = message.mentions.users.first() || message.author;
if (!member)
return message.channel.send(`<:reddet:933625465766301728> **| ${message.author.username}, Lütfen Bir Kullancı Belirt!**`);
let miktar = args[1];
if (!miktar)
return message.channel.send(`<:reddet:933625465766301728> **| ${message.author.username}, Lütfen Bir Miktar Belirt!**`);
message.channel.send(`**<:coin:910230697145401404> | \`${miktar || 0}\` Coin Silindi. Coin Silinen Kişi: \`${member.tag}\`!**`);
db.subtract(`coin_${member.id}`, miktar);
}
}