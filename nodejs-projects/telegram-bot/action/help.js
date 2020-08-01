const { bot } = require('../core/bot')

bot.help(ctx => {
    let text = `<b>Bizning botimizda bajarish mumkin bo\'lgan komandalar:</b> \n` + 
        `/start - <code>botni ishga tushiruvchi komanda</code> \n` + 
        `<a href='https://google.com'>GOOGLE</a>`

    ctx.replyWithHTML(text).then()
})