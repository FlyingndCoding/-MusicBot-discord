module.exports = {
  type:"musicStartCommand",
  channel:"$channelID",
  code:`
$setChannelVar[message;$get[id]]
$let[id;$apiMessage[$channelID;;{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{color:RANDOM}
{timestamp}
{field:> **πΆ Now playing**:$songInfo[title]:true}{field:> **π¦ Requested by**: <@$songInfo[userID]>:true}{field:> β° **Duration**:$replaceText[$replaceText[$advancedTextSplit[$songInfo[duration]; ;3];);];(;]:true}
{footer:Loop Status#COLON# $replaceText[$replaceText[$loopStatus;none;off];queue;on] | Volume#COLON# $volume}

;{actionRow:,2,2,skip,β©|0|false:,2,2,voldown,π|0|false:,2,2,stop,βΉοΈ|0|false:,2,2,pause,βΈοΈ|0|false:,2,2,volup,π|0|false}{actionRow:,2,2,loop,π|0|false:,2,2,queue,π|0|false};;yes]]
$if[$getChannelVar[message]!=]
$deleteMessage[$getChannelVar[message]]
$suppressErrors
$endif
`
}
