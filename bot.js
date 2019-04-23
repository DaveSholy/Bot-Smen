const Discord = require('discord.js');
const client = new Discord.Client();
 



client.on("message", message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] ==  'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });

client.on('message', message => {
    if(!message.channel.guild) return;
    if(message.content.startsWith('ping')) { // 
        if (message.author.bot) return;
        if(!message.channel.guild) return;
        var Bping =`${Math.round(client.ping)}` // Mdax77x CopyRight | Toxic Codes
                const E1ping = new Discord.RichEmbed()
        .setTitle('ــــــــــــــــــــــــــــــ')
        .addField(`**BOT Ping Is** :__${Bping}📶__`,"ــــــــــــــــــــــــــــــ")
        .setFooter(`Requested by | ${message.author.tag}`) //  
        .setColor('RANDOM')
        message.channel.send(E1ping);
    }
});


client.on('message', message => {
    if (message.content === ('server')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
        .setColor('RANDOM')
            .addField('Owner',`${message.guild.owner}`)
        .addField('Region',`${message.guild.region}`)
            .addField('Text Channels',` ${message.guild.channels.filter(chan => chan.type === 'text').size}`)
            .addField('Voice Channels',`${message.guild.channels.filter(chan => chan.type ==='voice').size}`)
            .addField('Members',`${message.guild.memberCount}`)
            .addField('Humans',`${message.guild.memberCount}`, true)
        .addField('Bots',`${message.guild.members.filter(m => m.user.bot).size}`)
        .addField('Roles',`${message.guild.roles.size}`)
    })
}
});


client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' Bot','Smen','Dev Smen',' Thank you ',' Use of bot ',' شكرا لك للأستخدام البوت'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/iXMiDo`);
    }, ms);
console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
});


client.on('ready',async () => {
  var ch "570176094741987338";
if(ch.type === "voice");
ch.join();
 });

client.login(process.env.BOT_TOKEN);

