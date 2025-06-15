#! name= 𝗟𝗶𝗴𝗵𝘁𝗿𝗼𝗼𝗺
#! desc= 𝗯𝘆 𝘀𝗶𝗿𝗺𝗼𝗽𝗽

[MITM]
hostname = %APPEND% photos.adobe.io
[Script]
LightRoom=type=http-response,pattern=^https:\/\/photos\.adobe\.io\/v2\/accounts*,requires-body=1, max-size=0,script-path=https://raw.githubusercontent.com/sirmopp/nhaanpate/napt/javascript/lightroom.js,script-update-interval=-1
