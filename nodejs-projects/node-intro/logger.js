const url = 'http://192.168.7.1/logger'

const EventEmitter = require('events')

class Logger extends EventEmitter{
  
  log = msg => {
    console.log(msg)
  
    this.emit('messageLogged', {id: 1, url: 'https://...'})
  }
}

module.exports = { Logger }