const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Asosiy sahifa!')
    res.end()
  }
  if (req.url === '/api/books') {
    res.write(JSON.stringify(['Code Complete', 'Clean Code', 'Refactoring']))
    res.end()
  }
})

server.listen(4000, () => console.log(`${server.address().port} portda server ishga tushdi!`))