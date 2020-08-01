const { Logger } = require('./logger')

const logger = new Logger()

logger.on('messageLogged', (arg) => {
  console.log('Ishladi...', arg)
})

logger.log('Assalom alekum Abdulloka...')