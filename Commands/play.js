// THIS FILE WAS TRANSLATED THE ORIGNAL CODE WAS BY MY FRIEND WHO IS ARABIC
module.exports = {
  name:"play",
  aliases:["p"],
  code: `
$editMessage[$get[id];{description:$get[aa] **Added to the queue**}{color:GREEN}{footer: Action by $usertag:$authorAvatar}]
$wait[1s]
$let[aa;$playSong[$message;1s;yes;yes;{description: Something went wrong}{color:RED}]]
$let[id;$apiMessage[$channelID;;{description: Searching for \`$message\` on YouTube...}{color:GREEN};;$messageID:true;yes]]
$onlyIf[$message!=;<@$authorID>{description: Please type the song name}{color:RED}]
$onlyIf[$voiceID!=;<@$authorID>{description: Please enter an audio ROM}{color:RED}]
`
}
