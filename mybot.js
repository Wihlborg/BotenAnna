const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const badwords = ["svart", "asiat", "norsk", "norge", "neger", "black", "vit", "white"];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  client.user.setActivity("with myself");
  if(message.author.id == "371358863724773388"){ //Oskar
    message.react("💩");
  }

  if (badwords.some(word => message.content.includes(word.toLowerCase())) ) { //cmonbruh, no racism
    const bruh = client.emojis.find("name", "bruh");
    message.react(bruh.id);
  }

  if (!message.content.startsWith(config.prefix)) {
    return;
  }
  //nedanstående gäller endast om meddelandet börjar med prefix
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();




  switch (command) {
    case "marco":
      message.channel.send("Polo!");
      break;

    case "help":
      const jeb = client.emojis.find("name", "jebaited");
      message.channel.send(`${jeb}`);
      break;

    case "listemojis":
      const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
      message.channel.send(emojiList);
      break;

    case "benka":
      const beng = client.emojis.find("name", "FeelsBenkaMan");
      message.channel.send(`${beng}`);
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
