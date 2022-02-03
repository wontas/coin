const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const bt = require('best-tools');

module.exports = {
name: "yardım",
async execute(client, message, args) {


const coin = db.fetch(`coin_${message.author.id}`)
const embed = new MessageEmbed()
.setAuthor('AC Coin Menü', message.guild.iconURL())
.setDescription(`**Çalıştırmak İstediğiniz Komutun İsmi Üstünde Yazan Butona Tıklayın.**`)
.setColor("#5865f2")
let btn2 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Bakiye")
.setCustomId("bakıye")
let btn3 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Günlük")
.setCustomId("gunluk")
let btn4 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Market")
.setCustomId("market")
let btn5 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Çalış")
.setCustomId("calıskazan")
let btn6 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Ara")
.setCustomId("ara")
let btn7 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Dilen")
.setCustomId("dılen")
const row = new MessageActionRow()
.addComponents([btn2, btn3 ,btn4]);

const row1 = new MessageActionRow()
.addComponents([btn5, btn6 ,btn7]);

message.reply({components: [row, row1], embeds: [embed] }).then(async (msg) => {
const filter = i => i.user.id !== client.user.id;
const collector = msg.createMessageComponentCollector({ filter });
collector.on('collect', async (i) => {
if (i.user.id !== message.author.id) return i.reply({ content: '<:reddet:933625465766301728>** Sen Bu Komutu Kullanamazsın Yalnızca Komutu Çalıştıran Kişi Kullanabilir.**', ephemeral: true });
if (!i.isButton()) return;
if (i.customId == "bakıye") {
var bakıyeembed = new MessageEmbed()
.setColor("#5865f2")
.setAuthor(message.guild.name, message.guild.iconURL())
.setDescription(`**Toplamda \`${coin || 0 }\` Coine <:coin:910230697145401404> Sahipsin.**`)
return i.reply({ embeds: [bakıyeembed], ephemeral: false  });
      } else if (i.customId == "market") {
  var embed = new MessageEmbed()
 .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .setColor("#5865f2")
  .setDescription(`<a:hello:933641881580081205> Selam **${i.user.tag}** AC Coin Bot Market Menüsüne Hoşgeldin! \n\n **Ürünlerimiz** \n\n <:spotify:893560395007160371> **Spotify Premium** \n Gerekli Coin: **3000**  \n <@&853166662782287932> **Sunucu Rolü** \n Gerekli Coin: **2000** `)
  .setFooter("AC Coin Market")
  .setTimestamp()
return i.reply({embeds: [embed] })         
} else if (i.customId == "gunluk") {
function rastgeleMiktar(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
}
let times = await db.fetch(`worktime1_${message.author.id}`);
let day = 86400000;
if (times !== null && day - (Date.now() - times) > 0) {
let time = ms(day - (Date.now() - times));
i.reply({ content: `<:reddet:933625465766301728> **Günlük Ödülünü Zaten Almışssın. Lütfen \`${time.hours}\` Saat, \`${time.minutes}\` Dakika Sonra Tekrar Dene!**`, ephemeral: false });
 } else {
let moneys = rastgeleMiktar(1,5);
i.reply({ content: `**Günlük Ödülünü Topladın \`${moneys}\` <:coin:910230697145401404> Coin!**`, ephemeral: false }); db.set(`worktime1_${message.author.id}`, Date.now())
db.add(`coin_${message.author.id}`, moneys);
        } } else if (i.customId == "calıskazan") {    
let times = await db.fetch(`worktime3_${message.author.id}`);
let day = 86400000;
if (times !== null && day - (Date.now() - times) > 0) {
let time = ms(day - (Date.now() - times));
i.reply({ content: `<:reddet:933625465766301728>** Zaten Yeteri Kadar Çalışmışsın Lütfen \`${time.hours}\` Saat, \`${time.minutes}\` Dakika Sonra Tekrar Dene!**`, ephemeral: false });
 } else {
db.add(`kapasite_${message.author.id}`, 10)
let miktarsonuç = (bt.rastgele("10", "pozitif"))
var sebep = ["Anka Holdingde Çalıştı","Gravitynin Yanında Kod Yazdı","Voxicin Yanında Yardımcılık Yaptı","Bankada Çalıştı","Sanayide Çalıştı","Bim de Çalıştı","A101 de çalıştı","Discord Firmasında Çalıştı","Berberde Çalıştı","Garsonluk Yaptı","Telefoncuda Çalıştı"]
var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
db.set(`worktime3_${message.author.id}`, Date.now())
db.add(`coin_${message.author.id}`, miktarsonuç)
const embed = new MessageEmbed()
.setDescription(`**${message.author.username} \`${sebepsonuç}\` ve \`${miktarsonuç}\` <:coin:910230697145401404>  Kazandı!**`)
.setColor("#5865f2")
return i.reply({embeds: [embed] })         
} 
} else if (i.customId == "ara") {
let times = await db.fetch(`worktime4_${message.author.id}`);
let day = 86400000;
if (times !== null && day - (Date.now() - times) > 0) {
let time = ms(day - (Date.now() - times));
i.reply({ content: `<:reddet:933625465766301728> **Zaten Yeteri Kadar Aramışsın Lütfen \`${time.hours}\` Saat, \`${time.minutes}\` Dakika Sonra Tekrar Dene!**`, ephemeral: false });
 } else {
db.add(`kapasite_${message.author.id}`, 10)
let miktarsonuç = (bt.rastgele("10", "pozitif"))
var sebep = ["Canı Aradı","Efeyi Aradı","Batuyu Aradı","Enes Baturu Aradı","Valesi Aradı","Manitasını Aradı","Anka Holdingini Aradı","Trendyolu Aradı","Annesini Aradı","Arkadaşını Aradı","Babasını Aradı","Kardeşini Aradı","Anka Kuşunu Aradı"]
var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
db.set(`worktime4_${message.author.id}`, Date.now())
db.add(`coin_${message.author.id}`,miktarsonuç)
const embed = new MessageEmbed()
.setDescription(`**${message.author.username} \`${sebepsonuç}\` ve \`${miktarsonuç}\` <:coin:910230697145401404>  Kazandı!**`)
.setColor("#5865f2")
return i.reply({embeds: [embed] }) 
}
 } else if(i.customId = "dılen") {

let times = await db.fetch(`worktime5_${message.author.id}`);
let day = 86400000;
if (times !== null && day - (Date.now() - times) > 0) {
let time = ms(day - (Date.now() - times));
i.reply({ content: `<:reddet:933625465766301728> **Zaten Yeteri Kadar Dilenmişsin Lütfen \`${time.hours}\` Saat, \`${time.minutes}\` Dakika Sonra Tekrar Dene!***`, ephemeral: false });
 } else {
db.add(`kapasite_${message.author.id}`, 10)
let miktarsonuç = (bt.rastgele("10", "pozitif"))
var sebep = ["Voxiden Para Dilendi","Gravityden Para Dilendi","Voxicden Altyapı Dilendi","Voxicden Rol Dilendi","Gravityden Kod Dilendi"]
var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
db.set(`worktime5_${message.author.id}`, Date.now())
db.add(`coin_${message.author.id}`,miktarsonuç)
const embed = new MessageEmbed()
.setDescription(`**${message.author.username} \`${sebepsonuç}\` ve \`${miktarsonuç}\` <:coin:910230697145401404>  Kazandı!**`)
.setColor("#5865f2")
return i.reply({embeds: [embed] }) 

 }
}
})
})
}
}