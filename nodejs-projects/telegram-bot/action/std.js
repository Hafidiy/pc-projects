const axios = require('axios')
const { bot } = require('../core/bot')
const { Composer, Markup } = require('telegraf')

const url = 'https://raw.githubusercontent.com/denoland/deno_website2/master/deno_std_versions.json'
const composer = new Composer()

composer.command('std', async ctx => {
    let versions = []
    let keyboards = []
    let data = await axios.get(url).then(res => res.data).catch(err => console.log('Error: ', err))

    for (let i = 0; i < data.length; i++) {
        keyboards.push(
            [Markup.urlButton(`${data[i]}`, `https://deno.land/std${data[i]}`)]
        )
    }
    ctx.replyWithHTML('Choose version from the list: ', {
        reply_markup: Markup.inlineKeyboard(keyboards),
        parse_mode: 'HTML'
    }).then()
})

bot.use(composer.middleware())