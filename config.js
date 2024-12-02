const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07041113108";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_46_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNixcbiAgICAgICAgMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc4LFxuICAgICAgICA5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgzLFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidnl5am9USFJHREhNd0grKzRkUmtRSFJYVitRNlBtaS9oVzhtYjhGNmRtQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMXNQekNsQ0pSbWl6R1Bzcl9yaWJ3Z1wiLFxuICBcInBob25lSWRcIjogXCI3OWU2NjgyZi00NzcxLTRiNzUtYWZmMi0wOTRhMmY3ZTY4NTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgNDcsXG4gICAgICA1NixcbiAgICAgIDIwMCxcbiAgICAgIDIzMyxcbiAgICAgIDU3LFxuICAgICAgNzksXG4gICAgICAzNSxcbiAgICAgIDkzLFxuICAgICAgNDIsXG4gICAgICAxODksXG4gICAgICAxOTIsXG4gICAgICA0NSxcbiAgICAgIDEwMixcbiAgICAgIDEyOCxcbiAgICAgIDU1LFxuICAgICAgMjQ2LFxuICAgICAgMjI2LFxuICAgICAgMjM5LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMTM4LFxuICAgICAgMTc4LFxuICAgICAgMjE5LFxuICAgICAgNDEsXG4gICAgICA3OCxcbiAgICAgIDEzMyxcbiAgICAgIDE3MixcbiAgICAgIDkzLFxuICAgICAgMTIyLFxuICAgICAgODksXG4gICAgICA5OCxcbiAgICAgIDI2LFxuICAgICAgMTM2LFxuICAgICAgMjA5LFxuICAgICAgMTMyLFxuICAgICAgMTQwLFxuICAgICAgNzIsXG4gICAgICAxMjAsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDNUODNXTFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDExMTMxMDg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEyODI5MDM0NTY5ODQ5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGFRa1lBREVLYnh1TG9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1aFdvYnloN0cwMldobUhCQ0hGVFVQUmhBV2FMU0pIYkJJYkJYbjNCSGtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNqNXpITnlaOVVBd0R4ZGRJUnhhK3NzdUw2dmZLODlZMEYwSzlxRllxT3E4RW0yY3VBZFdRSThLK2RPN3VnbW0rZHgvZDFyVjdFTFlJYnZxSldobER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxDNGdoNzJzWEptN0VXc3dhU3U4eE1mY1RLbTFhc1Znblp6SmUyRWhONDRlMElnUUZXQlpuQVpndXA3OU9uc2lsTUtXWDNtRWdFK0JnY1N2QmdJZGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDExMTMxMDg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzE3OTU2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdOeFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR054Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNkk4Q20vaXB0NTBlMWRSekMvMkczWXVRR1RCSlUwc1hkOE9xMm1DTlUxND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MDU1ODcwNjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzE3OTM0NjI5N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
