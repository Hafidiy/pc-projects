const auth = (req, res, next) => {
  console.log('Autentifikatsiya jarayoni...')
  next()
}

module.exports = { auth }