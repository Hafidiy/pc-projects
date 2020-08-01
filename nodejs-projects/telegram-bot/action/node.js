const { Composer, Markup } = require('telegraf')
const { bot } = require('../core/bot')
const axios = require('axios')
const fuzzy = require('fuzzy')

const composer = new Composer()

const url = 'https://raw.githubusercontent.com/denoland/deno_website2/master/database.json'

composer.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
    let results = []
    let indexation = 0
    let database = await axios.get(url).then(res => res.data).catch(err => 'Error: ', err)

    let packs = Object.keys(database).map(item => item)
    let similarities = fuzzy.filter(inlineQuery.query, packs).sort().slice(0, 20)

    let found = similarities.map(item => item.string)
    for (let key of found){
        let data = database['key']
        let repo = data['repo']
        let desc = data['desc']
        let auth = data['owner']
        let deno = `https://deno.land/x/${key}`
        let github = `https://github.com/${auth}/${repo}`
        let prefix = key.replace('_', ' ')

        let text =
            `<b>Package:</b> ${prefix}` + '\n' 
            `<b>Description: </b> ${desc}` +  '\n'

        const keyboard = Markup.inlineKeyboard([
            Markup.urlButton('Github', github),
            Markup.urlButton('Deno', deno),
        ], {
            columns: 2
        })

        let serializer = () => {
            const querylizer = {
                type: 'article',
                id: ++indexation,
                url: deno,
                title: prefix,
                description: desc,
                reply_markup: keyboard,
                intput_message_content: {
                    message_text: text,
                    parse_mode: 'HTML'
                }
            }
            results.push(querylizer)
            indexation += 1
        }
    } serializer()
    return results
})

bot.use(composer.middleware())