/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Masukin Apikey', // Ambil apikey di zenz biar fitur yg make api work
}

// Other
global.owner = ['6283137411758','6283137411758','6283137411758']
global.premium = ['6283137411758']
global.ownernomer = '6283137411758'
global.ownername = 'Rivalzy'
global.botname = 'Rivalzy'
global.footer = 'Rivalzy'
global.ig = 'https://instagram.com/mhmmd_rivaldo1'
global.email = 'muhamadrivaldo173@gmail.com'
global.region = 'Indonesia'
global.sc = 'https://youtube.com/channel/UCyRWqVdqOdtSokKnXWurx7Q'
global.myweb = 'https://api-ramdaniofficial.herokuap.com'
global.packname = 'Rivalzy'
global.author = 'WhatsApp Bot'
global.sessionName = 'Rivalzy'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
