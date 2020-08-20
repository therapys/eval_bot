const Discord = require("discord.js"),
    vm = require("vm"),
    codeContext =  {}, 
    client = new Discord.Client();


let prefix = "-";

vm.createContext(codeContext);


client.on("ready", () => {
  console.log("Bot is online!");
});

client.on("message", message => { 
    const args = message.content.split(" ").slice(1); 
    if (message.content.startsWith(prefix + "eval")) { 
        try {
            const code = args.join(" "); 
        let evaled = eval(code); 
        if (typeof evaled !== "string") 
        evaled = require("util").inspect(evaled); 
        message.channel.send(evaled, {code:"xl"}); 
        } catch (error){
            return message.channel.send(`**error:** ${error}`);
        }
}});

client.login("YOUR-TOKEN");