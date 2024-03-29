const config = require('config')
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const token = req.headers['x-auth-token']

  // Check for token
  if(!token) {
    res.status(401).json({ msg: 'No token, authorization denied' })
    return 0
  }

  try{
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    // Add user from payload
    req.user = decoded
    next()
  } catch(err){
    res.status(400).json({ msg: 'Token is not valid' })
  }
}

module.exports = auth