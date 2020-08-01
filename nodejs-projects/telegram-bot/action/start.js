const { Composer } = require('telegraf')
const { bot } = require('../core/bot')
const composer = new Composer()
const { messages } = require('../lib/messages')
const { keyboards } = require('../lib/keyboards')

composer.start(ctx => {
    ctx.replyWithHTML(messages.start, {
        reply_markup: keyboards['start']
    }).then()
})

composer.action('help', ctx => {
    ctx.editMessageText(messages['help'], {
        parse_mode: 'HTML'
    }).then()
})

bot.use(composer.middleware())