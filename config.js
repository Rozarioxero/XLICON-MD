const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "916282524515"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'www.ansaranu009@gmail.com'
global.github = 'https://github.com/Rozarioxero/XLICON-MD'
global.location = 'kerala palakkad'
global.gurl = 'https://instagram.com/anshif_xer/' // add your username
global.sudo = process.env.SUDO || '916282524515' 
global.devs = '916282524515';
global.website = 'https://github.com/Rozarioxero/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/a6qfrvI.mp4'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0c2SXZab2ltMklQVTZvbWJaU3JoOHN2UGRkY1J5aFpuUTlRMXBnRnZrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnF4YWZSQ0xOVlR5QmNoaG9UK2JLc0hVZnJqaDQxcWRGZmxBSTV0dGVRaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTTFFMVdTMnhyR0diWGhsQ0tLUzBldExORFprQnhkZzNBSGF6MVQ5TmxnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkaTFqRHpId1Y1Z3VFcmFjZmUrQzR2UG9VZnlYV29sK2dMWVluWVJlWGxFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFBMy9BRDZWWURPaFdWZDhWUGxnYlY2K21lN2pOdW5NMCs5dDZZTkU5Mnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBqN0s0UVRYMWlYdTdiRllpSmZ5ZXBJVXVQRnB6cFlzN1JJeHE0WFJTa1U9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIeFNLM0JsMkpMb2VwejdmRTFENHlVZ3VNOGEvWTZXdlgrWFJGOHVEMXIrSkJ2L0xROUtITUVTNFUxTzUwemRwUU0yZ3k3Njk4K1BJY3FEN0U2UWVnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjMyLCJhZHZTZWNyZXRLZXkiOiJXZWlKMm1VOW9Ra2R0YnA5RDg1cHBoeGlja0lSOHRLTXlOMFB6ZmZ2eXVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5VFcyU0tud1JYaWtzYzVDM2MySXBRIiwicGhvbmVJZCI6IjA4Y2E2OTA5LWZjZDYtNDk4Ni1iNjQyLThlZTBkZGJjNmY3NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R1RqNDFUVy9YUjJlcU93LzhTc0d2Z2hMM3c9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpxMWNiZ2UzbUlSTXRQZzh6ay90MUpjWHpIUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05IUHdkUUZFS0xkMnJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVvU2psQWt0dVorVWtsUDVsdm80cVJXODk5azNCWjFSQUk1TElRYWdVRWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitBeXA1emJESzRtb3JQaCtiR0Q2b3ArcTROWURiVk5EaVpXUWhDbUlJLzBqSnV4d3hWMjFtTVRIbEJWNmRoTVEwdHhDSjFjNEl5VnNVN0Q3Wm1yMEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxeHNxcmRnR0Q2cjU5QVVTVTVjNkxYU09ZeDdoNlR0cUJMamp0aHU2NkFCM3hLWmptcXRYME56YUlURXZJdUR3RVVUQ3hHMHIrZkdpZG15K3B4UFlpQT09In0sIm1lIjp7ImlkIjoiOTE2MjgyNTI0NTE1OjlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MjgyNTI0NTE1OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWFFbzVRSkxibWZsSkpUK1piNk9La1Z2UGZaTndXZFVRQ09TeUVHb0ZCSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTUzOTc0OH0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  ' ᴀɴsʜɪғ xᴇʀ💞',
  packname:  process.env.PACK_NAME || ' ᴀɴsʜɪғ xᴇʀ md',
   
  botname:   process.env.BOT_NAME === undefined ? " ᴀɴsʜɪғ xᴇʀ md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? ' ᴀɴsʜɪғ xᴇʀ official' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
