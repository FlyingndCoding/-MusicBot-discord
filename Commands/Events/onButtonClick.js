const buttons = "{actionRow:,2,2,skip,⏩|0|false:,2,2,voldown,🔉|0|false:,2,2,stop,⏹️|0|false:,2,2,pause,⏸️|0|false:,2,2,volup,🔊|0|false}{actionRow:,2,2,loop,🔄|0|false:,2,2,queue,📄|0|false}"
//Skip Buttons
module.exports = [{
  type:"interactionCommand",
  prototype:"button",
  name:"skip",
  code:`
$if[$queueLength==0]
$interactionReply[There is nothing being played;;;64]
$else
$if[$voiceID==]
$interactionReply[You need to be in a voice channel!;;;64]
$else
$if[$voiceID!=$voiceID[$clientID]]
$interactionReply[You need to be in <#$voiceID[$clientID]>;;;64]
$else
$skipSong
$interactionReply[;{description: Skipped by $usertag}{color:GREEN}{footer:Bot Made By aa.#5203};;;7]

$endif
$endif
$endif



`
},{
  //Stop Button
  name:"stop",
  prototype:"button",
  type:"interactionCommand",
  code:`
$if[$queueLength==0]
$interactionReply[There is nothing being played;;;64]
$else
$if[$voiceID==]
$interactionReply[You need to be in a voice channel!;;;64]
$else
$if[$voiceID!=$voiceID[$clientID]]
$interactionReply[You need to be in <#$voiceID[$clientID]>;;;64]
$else
$stopSong
$interactionReply[;{description: Stopped music by $usertag and cleared queue}{color:GREEN}{footer:Bot Made By aa.#5203};;;7]

$endif
$endif
$endif


`
},{
  //Pause Buttons
 type:"interactionCommand",
  name:"pause",
  code:`$if[$queueLength==0]
$interactionReply[There is nothing being played;;;64]
$else
$if[$voiceID==]
$interactionReply[You need to be in a voice channel!;;;64]
$else
$if[$voiceID!=$voiceID[$clientID]]
$interactionReply[You need to be in <#$voiceID[$clientID]>;;;64]
$else

$if[$queueStatus==playing]
$pauseSong
$interactionReply[;{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{color:RED}
{timestamp}
{field:> **🎶 Now playing**:$songInfo[title]}{field:> **👦 Requested by**: <@$songInfo[userID]>}{field:> ⏰ **Duration**:$replaceText[$replaceText[$advancedTextSplit[$songInfo[duration]; ;3];);];(;]}
{field:> **Last action**:
$usertag paused the music
}
{footer:Loop Status#COLON# $replaceText[$replaceText[$loopStatus;none;off];queue;on] | Volume#COLON# $volume}

;{actionRow:,2,2,skip,⏩|0|false:,2,2,voldown,🔉|0|false:,2,2,stop,⏹️|0|false:,2,2,pause,▶️|0|false:,2,2,volup,🔊|0|false}{actionRow:,2,2,loop,🔄|0|false:,2,2,queue,📄|0|false};;7]
$else
$resumeSong

$interactionReply[;{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{color:RANDOM}
{timestamp}
{field:> **🎶 Now playing**:$songInfo[title]}{field:> **👦 Requested by**: <@$songInfo[userID]>}{field:> ⏰ **Duration**:$replaceText[$replaceText[$advancedTextSplit[$songInfo[duration]; ;3];);];(;]}

{footer:Loop Status#COLON# $replaceText[$replaceText[$loopStatus;none;off];queue;on] | Volume#COLON# $volume}

;${buttons};;7]
$endif


  
$endif
$endif
$endif

`
},{
  //Loop Button
type:"interactionCommand",
  name:"loop",
  code:`
$if[$queueLength==0]
$interactionReply[There is nothing being played;;;64]
$else
$if[$voiceID==]
$interactionReply[You need to be in a voice channel!;;;64]
$else
$if[$voiceID!=$voiceID[$clientID]]
$interactionReply[You need to be in <#$voiceID[$clientID]>;;;64]
$else
$interactionReply[;{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{color:RANDOM}
{timestamp}
{field:> **🎶 Now playing**:$songInfo[title]}{field:> **👦 Requested by**: <@$songInfo[userID]>}{field:> ⏰ **Duration**:$replaceText[$replaceText[$advancedTextSplit[$songInfo[duration]; ;3];);];(;]}
{field:> Last action:$usertag toggled queue loop}
{footer:Loop Status#COLON# $replaceText[$replaceText[$loopStatus;none;off];queue;on] | Volume#COLON# $volume}

;${buttons};;7]
$wait[1s]
$let[a;$loopQueue]


$endif
$endif
$endif






`
},{
  //queue button
type:"interactionCommand",
  name:"queue",
  code:`
$if[$queueLength==0]
$interactionReply[There is nothing being played;;;64]
$else

$interactionReply[;{title:Queue}{description:$replaceText[$replaceText[$checkCondition[$queue[1;50; 🎶- {number} | {title} by <@{userID}>]==];true; Queue is empty];false;$queue[1;50; 🎶- {number} | {title} by <@{userID}>]]}{color:GREEN}{footer:Bot by aa.#5203};;64]
$endif

`
},{
//Volume up
type:"interactionCommand",
  name:"volup",
  code:`
$if[$queueLength==0]
$interactionReply[There is nothing being played;;;64]
$else
$if[$voiceID==]
$interactionReply[You need to be in a voice channel!;;;64]
$else
$if[$voiceID!=$voiceID[$clientID]]
$interactionReply[You need to be in <#$voiceID[$clientID]>;;;64]
$else
$if[$volume==200]
$interactionReply[200 is the max volume;;;64]
$else
$interactionReply[;{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{color:RANDOM}
{timestamp}
{field:> **🎶 Now playing**:$songInfo[title]}{field:> **👦 Requested by**: <@$songInfo[userID]>}{field:> ⏰ **Duration**:$replaceText[$replaceText[$advancedTextSplit[$songInfo[duration]; ;3];);];(;]}
{field:> Last action:$usertag Changed the volume}
{footer:Loop Status#COLON# $replaceText[$replaceText[$loopStatus;none;off];queue;on] | Volume#COLON# $volume}

;${buttons};;7]
$wait[1]
$volume[$math[$volume+10]]

$endif
$endif
$endif
$endif




  `
},{
  type:"interactionCommand",
  name:"voldown",
  code:`
$if[$queueLength==0]
$interactionReply[There is nothing being played;;;64]
$else
$if[$voiceID==]
$interactionReply[You need to be in a voice channel!;;;64]
$else
$if[$voiceID!=$voiceID[$clientID]]
$interactionReply[You need to be in <#$voiceID[$clientID]>;;;64]
$else
$if[$volume==0]
$interactionReply[0 is the min volume;;;64]
$else
$interactionReply[;{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{color:RANDOM}
{timestamp}
{field:> **🎶 Now playing**:$songInfo[title]}{field:> **👦 Requested by**: <@$songInfo[userID]>}{field:> ⏰ **Duration**:$replaceText[$replaceText[$advancedTextSplit[$songInfo[duration]; ;3];);];(;]}
{field:> Last action:$usertag Changed the volume}
{footer:Loop Status#COLON# $replaceText[$replaceText[$loopStatus;none;off];queue;on] | Volume#COLON# $volume}

;${buttons};;7]
$wait[1]
$volume[$math[$volume-10]]

$endif
$endif
$endif
$endif







`
}]       
