const Discord = require("discord.js");
const { MessageButton } = require('discord-buttons')
// disbut(bot);
module.exports = {
    name: "szöveg",
    catgory: "teszt",
    description: "Szöveg kiíratása bottal.",
    run: async (bot, message, args) => {
    let szöveg = args.join(" ");



        let no = new MessageButton()
        .setDisabled(true)
        .setStyle("green")
        .setLabel("Ne nyomj meg!")
        .setID("smart")

        let yes = new MessageButton()
        .setStyle("green")
        .setLabel("Ne nyomj meg!")
        .setID("smartsss")

        const xdembed = new Discord.MessageEmbed()
        .setAuthor("Ne nyomd meg a gombot!")


        message.channel.send({
            buttons: [yes],
            embed: xdembed,
        })

    


    // if(szöveg) {
    //     let dumaEmbed = new Discord.MessageEmbed()
    // .setColor("#98AA12")
    // .setAuthor(message.author.username)
    // .addField("Szöveg:", szöveg)
    // .setFooter(`teszt | ${message.createdAt}`)

    // message.channel.send(dumaEmbed)
    // } else {
    //     message.reply("írj szöveget!")
    // }
}
}