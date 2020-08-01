const router = require('express').Router()

const Pusher = require('pusher')

var pusher = new Pusher({
  appId: '969334',
  key: '1298a53718fc8363a954',
  secret: 'ce8d4bea2264bd100ea2',
  cluster: 'ap2',
  encrypted: true
})

router.get('/', (req, res) => res.json({msg: '/api/poll'}))

router.post('/', (req, res) => {
  console.log(req.body)
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  })

  res.json({ success: true, message: 'Thank you for voting' })

  return 0
})

module.exports = router