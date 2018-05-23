const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity({game: {name: "with myself", type: 0}});
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) {
    return;
  }
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(message.author.name == "Fotte"){
    message.react("💩");
  }


  switch (command) {
    case "marco":
      message.channel.send("Polo!");
      break;

    case "help": //ger felmeddelande i chatten
      const jeb = client.emojis.get("448644205913309204");
      message.channel.send(`${jeb}`);
      break;

    case "listemojis":
      const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
      message.channel.send(emojiList);
      break;

    case "benka": //funkar inte alls
      const beng = client.emojis.get("448644477155016714");
      message.channel.send(beng)
      break;

    case "schema":
      message.channel.send("http://schema.hkr.se/setup/jsp/Schema.jsp?startDatum=idag&intervallTyp=m&intervallAntal=6&sprak=SV&sokMedAND=true&forklaringar=true&resurser=p.TGDU1+2017+35+100+NML+sv")
      break;

    case "poop":
      message.react("💩");
      break;
  }
});

client.login(config.token);
