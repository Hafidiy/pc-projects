const { Markup } = require('telegraf')
const { bot } = require('../core/bot')

bot.command('/inline', ctx => {

    const keyboard = Markup.inlineKeyboard(
        [
            Markup.callbackButton('Tester', 'inline')
        ]
    )

    ctx.telegram.sendMessage(
        ctx.from.id,
        'Testing url buttons',
        {
            reply_markup: keyboard
        }
    ).then()
})

bot.action('inline', ctx => {
    ctx.editMessageText('Testet').then()
})