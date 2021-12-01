module.exports = {
  type:"musicStartCommand",
  channel:"$channelID",
  code:`
$setChannelVar[message;$get[id]]
$let[id;$apiMessage[$channelID;;{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{color:RANDOM}
{timestamp}
{field:> **🎶 Now playing**:$songInfo[title]:true}{field:> **👦 Requested by**: <@$songInfo[userID]>:true}{field:> ⏰ **Duration**:$replaceText[$replaceText[$advancedTextSplit[$songInfo[duration]; ;3];);];(;]:true}
{footer:Loop Status#COLON# $replaceText[$replaceText[$loopStatus;none;off];queue;on] | Volume#COLON# $volume}

;{actionRow:,2,2,skip,⏩|0|false:,2,2,voldown,🔉|0|false:,2,2,stop,⏹️|0|false:,2,2,pause,⏸️|0|false:,2,2,volup,🔊|0|false}{actionRow:,2,2,loop,🔄|0|false:,2,2,queue,📄|0|false};;yes]]
$if[$getChannelVar[message]!=]
$deleteMessage[$getChannelVar[message]]
$suppressErrors
$endif
`
}
