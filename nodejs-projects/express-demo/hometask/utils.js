const sendError = (msg) => {
  return {
    succes: false,
    msg
  }
}

module.exports = { sendError }