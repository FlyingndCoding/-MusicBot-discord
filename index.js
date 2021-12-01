const express = require('express');
const app = express();

app.get('/', (req,res) => {
res.sendStatus(200)
});
app.listen(5000) ;
const config = require("./config")
const database = require("./db")
const aoi = require("aoi.js")
const music = new aoi.Bot({
token:process.env.token,
prefix:config.bot.prefix
})
music.status({ 
  text:config.status.text,
  type:config.status.type,
  status:config.status.status,
  time:config.status.time
});  
music.onMessage({
  respondToBots:false,
  guildOnly:true
})
music.variables(database)
music.onInteractionCreate()
music.loadCommands("./Commands/")
