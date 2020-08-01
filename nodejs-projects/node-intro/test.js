const fs = require('fs')
const os = require('os')
const path = require('path')
const EventEmitter = require('events')

// ---------------Events------------

// const emitter = new EventEmitter()

// emitter.on('messageLogging', (msg) => {
//   console.log(msg)
// })

// emitter.emit('messageLogging', {message: 'Yozilvotti...'})

// emitter.on('messageLogged', (arg) => {
//   console.log(arg)
// })

// emitter.emit('messageLogged', {id: 1, url: 'https://...'})

// ----------------File Systems-------------------

// fs.writeFile('message.txt', 'This is a awesome text', 'utf8', (err, data) => {
//   if (err) throw err

//   fs.readFile('message.txt', 'utf8', (err, data) => {
//     if (err) throw err

//     console.log(data)
//   })
// })

// fs.readFile('./package.json', 'utf8', (err, data) => {
//   if (err) throw err

//   console.log(data)
// })

// fs.readdir('./', (err, data) => {
//   if (err) throw err

//   console.log(data)
// })


// -------------OS---------------------

// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.userInfo())
// console.log(os.uptime() / 60 / 60)
// console.log(os.freemem() / 1024 / 1024 / 1024)
// console.log(os.totalmem() / 1024 / 1024 / 1024)