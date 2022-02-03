const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "alış",
async execute(client, message, args) {

const coins = db.get(`coin_${message.author.id}`);

  let embed = new MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true})).setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setThumbnail(message.guild.iconURL()).setColor("#5865f2").setTimestamp();
  let para = db.get(`coin_${message.author.id}`);
  let arg = args[0];
  if(!arg) {
    return message.channel.send({ embeds: [ embed.setDescription(":x: Lütfen satın alacağın şeyi yaz:\n\n 1. `spotify`- Fiyatı: `5000` - Spotify premiuma sahip olursun.\n 2. `vip` - Fiyatı: `1000` - Hoş bir vip rolü istemezmisin?") ] })
  } else if(arg == "spotify") {
    if(para < 3000) {
      return message.channel.send({ embeds: [ embed.setDescription(`<:reddet:933625465766301728>** Senin Toplamda \`${para || 0}\` <:coin:910230697145401404> Coinin Var!**\n<:reddet:933625465766301728> **Bunu Alabilmek İçin \`${3000-para}\` <:coin:910230697145401404> Coine Daha İhtiyacın Var!**`) ] })
    } else {
     var spo = ["https://spotify.com","Kanka Be Şansına Çıkmadı Üzülme Bidahakine Alırsın","https://www.spotify.com/tr/family/join/invite/91AcBXc949Z5c15/ Aksaray, Malatya Airport, D.H.M.İ. Malatya Havaalanı, 44600 Merkez/Akçadağ/Malatya, Turkey"]
var spoat = spo[Math.floor(Math.random() * spo.length)];
      await db.subtract(`coin_${message.author.id}`, 3000);
     message.member.send(spoat)
      return message.channel.send({ embeds: [ embed.setDescription("<:onayla:933625466189910056>** Başarıyla `Spotify` Adlı Ürün Satın Alındı!**\n ** Güle Güle Kullanman Dileğiyle!**") ] });
    };
    } else if(arg == "vip") {
      if(para < 2000) {
      return message.channel.send({ embeds: [ embed.setDescription(`<:reddet:933625465766301728>** Senin Toplamda \`${para || 0}\` <:coin:910230697145401404> Coinin Var!**\n<:reddet:933625465766301728> **Bunu Alabilmek İçin \`${2000-para}\` <:coin:910230697145401404> Coine Daha İhtiyacın Var!**`) ] })
      } else {
        await db.subtract(`coin_${message.author.id}`, 2000);
        message.guild.members.cache.get(message.author.id).roles.add("853166662782287932")
     return message.channel.send({ embeds: [ embed.setDescription("<:onayla:933625466189910056>** Başarıyla `Special Rol` Adlı Ürün Satın Alındı!**\n ** Güle Güle Kullanman Dileğiyle!**") ] });

    };

    
    }
 
}
}