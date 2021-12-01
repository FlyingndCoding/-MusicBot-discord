module.exports = [{
  name:"e",
  code:`$eval[$message]
$onlyForIDs[$botownerID;]`
},{name:"djs",
code:`$djsEval[$message;yes]
$onlyForIDs[$botownerID;]`},{
  name:"re",
  code:`$title[Reload Commands]
  $addField[New Commands Count:;$get[new] command(s)]
  $addField[Reload:;$commandsCount command(s)]
  $thumbnail[$userAvatar[$clientID]]
  $color[BLUE]
  $addTimeStamp
  
  
  
  $let[new;$math[$get[after]-$get[before]]]
  $let[after;$commandsCount]
  $updateCommands
 $let[before;$commandsCount]
$onlyForIDs[$botOwnerId;]`
}]  
