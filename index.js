const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const db = require("quick.db");
const client = new Client({ 
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] 
});
client.events = new Collection();
client.commands = new Collection();
client.config = require('./conf.json');


client.on('ready', () => console.log('bot bağlandı'));
client.on('ready', () => console.log(`Logged in as ${client.user.tag}`));


fs.readdir('./commands/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (dosya) => {
        var cmd = require(`./commands/${dosya}`);
        client.commands.set(cmd.name, cmd);
    });
});

fs.readdir('./events/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (dosya) => {
        var event = require(`./events/${dosya}`);
        client.events.set(event.name, event);
    });
});

const prefix = client.config.prefix;
client.on('messageCreate', async (message) => {
    client.events.get('messageCreate').execute(client, message, prefix)
});


client.on('messageCreate', async (message) => {
   const db = require("quick.db")
    db.add(`coin_${message.author.id}`, 1);
 });

client.on('messageCreate', async (message) => {
   const db = require("quick.db")
    db.add(`mesajsayi_${message.guild.id}_${message.author.id}`, 1);
 });

 
client.on('ready', async (ready) => {
  client.user.setActivity("!yardım Yazarak Menüye Ulaşabilirsiniz")
 });


client.on("messageCreate", message => {
  const db = require("quick.db");
  let mesajsayi = db.fetch(`msgcount.${message.guild.id}_${message.author.id}`);
      if(mesajsayi == "20") {
    db.add(`coin_${message.author.id}`, 5)
   message.channel.send(`<a:hello:933641881580081205> **Heyy! ${message.author.username}, Sunucumuzda 20  Mesaja Ulaştın ve Hediye Olarak \`5\` Coin <:coin:910230697145401404> Hesabına Yatırıldı.**`);
  };
    if(mesajsayi == "50") {
    db.add(`coin_${message.author.id}`, 10)
   message.channel.send(`<a:hello:933641881580081205> **Heyy! ${message.author.username}, Sunucumuzda 50 Mesaja Ulaştın ve Hediye Olarak \`10\` Coin <:coin:910230697145401404> Hesabına Yatırıldı.**`);
  };
  if(mesajsayi == "100") {
    db.add(`coin_${message.author.id}`, 20)
   message.channel.send(`<a:hello:933641881580081205> **Heyy! ${message.author.username}, Sunucumuzda 100 Mesaja Ulaştın ve Hediye Olarak \`20\` Coin <:coin:910230697145401404> Hesabına Yatırıldı.**`);
  };
    if(mesajsayi == "200") {
    db.add(`coin_${message.author.id}`, 50)
   message.channel.send(`<a:hello:933641881580081205> **Heyy! ${message.author.username}, Sunucumuzda 200 Mesaja Ulaştın ve Hediye Olarak \`50\` Coin <:coin:910230697145401404> Hesabına Yatırıldı.**`);
  };
    if(mesajsayi == "250") {
    db.add(`coin_${message.author.id}`, 75)
   message.channel.send(`<a:hello:933641881580081205> **Heyy! ${message.author.username}, Sunucumuzda 250 Mesaja Ulaştın ve Hediye Olarak \`75\` Coin <:coin:910230697145401404> Hesabına Yatırıldı.**`);
  };
  if(mesajsayi == "500") {
    db.add(`coin_${message.author.id}`, 150)
   message.channel.send(`<a:hello:933641881580081205> **Heyy! ${message.author.username}, Sunucumuzda 500 Mesaja Ulaştın ve Hediye Olarak \`150\` Coin <:coin:910230697145401404> Hesabına Yatırıldı.**`);
  };
  if(mesajsayi == "750") {
    db.add(`coin_${message.author.id}`, 250)
   message.channel.send(`<a:hello:933641881580081205> **Heyy! ${message.author.username}, Sunucumuzda 750 Mesaja Ulaştın ve Hediye Olarak \`250\` Coin <:coin:910230697145401404> Hesabına Yatırıldı.**`);
  };
  if(mesajsayi == "1000") {
    db.add(`coin_${message.author.id}`, 500)
   message.channel.send(`<a:hello:933641881580081205> **Heyy! ${message.author.username}, Sunucumuzda 1000 Mesaja Ulaştın ve Hediye Olarak \`500\` Coin <:coin:910230697145401404> Hesabına Yatırıldı.**`);
  };
});

client.login(process.env.token);