module.exports = [{
name:"help",
code:`
$title[Help Commands]
$color[FFC000]
$description[
**Public Commands : **
!play / soon
**Dev Commands : **
!eval / !reload
]
$addTimestamp
$footer[Requested by $userTag[$authorID];$userAvatar[$authorID]]
$author[$userTag[$clientID];$userAvatar[$clientID]]
$thumbnail[$serverIcon[$guildID]]
`
},{
nonPrefixed:true,
name:"<@$clientID>",
code:`
<@$authorID> , My Prefix is : ! , for more help write : !help
`
}]
