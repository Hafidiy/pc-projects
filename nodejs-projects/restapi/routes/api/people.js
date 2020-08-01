const route = require('express').Router()

// Person model
const Person = require('../../models/Person')

// @route   GET api/people
// @desc    GET all people
// @access  Public
route.get('/', async (req, res) => {
  let tmp = await Person
    .find(req.query.gender ? {gender: req.query.gender.replace(req.query.gender[0], req.query.gender[0].toUpperCase())} : null)
    .limit(req.query.limit ? parseInt(req.query.limit) : 0)
    .skip(req.query.limit && req.query.page && req.query.page !== '0'
      ? parseInt(req.query.limit)*(parseInt(req.query.page)-1)
      : null)

  tmp.map(person => {
    person.avatar = `${process.env.WEB_URL || ''}${person.avatar}`
  })

  res.json(tmp)
})

// @route   GET api/items/asdas23231123213asda
// @desc    GET person by id
// @access  Public
route.get('/:id', async (req, res) => {
  if(req.params.id.length !== 24){
    res.status(404).json({message: 'Not found!'})
    return 0
  }

  const tmp = await Person.find({_id: req.params.id})
  // tmp[0].avatar = `${URL}${tmp[0].avatar}`

  res.status(200).json(tmp[0])
})

// // Add data to database
// route.post('/:sum', async (req, res) => {
//   const people = parseInt(Math.random()*100)%2 === 1
//    ? maleFunc(req.params.sum)
//    : femaleFunc(req.params.sum)

//   const tmp = await Person.insertMany(people)

//   res.status(200).json(tmp)
// })

module.exports = route







































// const maleFunc = count => {
//   const firstNames = ['Abdullokh', 'Ibrokhim', 'Abdurrohman', 'Muhammadloiq', 'Xolid', 'Umar', 'Habibullokh', 'Abdullatif', 'Abdulfotih', 'Abduljabbor']
//   const lastNames = ['Tolipov', 'Sobirov', 'Shokirov', 'Abdullayev', 'Rustamov', 'Xoliqov', 'Erkinov', 'Nematov', 'Sodiqov', 'Numonov']
//   const numCodes = ['90', '91', '93', '94', '95', '97', '98', '99']

//   let tmp = []

//   for (let i = 0; i < count; i++) {
//     tmp.push({
//       name: {
//         first: `${firstNames[parseInt(Math.random()*100) % 10]}`,
//         last: `${lastNames[parseInt(Math.random()*100) % 10]}`
//       },
//       gender: 'Male',
//       age: `${parseInt(Math.random()*100) % 20 + 20}`,
//       cell: `+998${numCodes[parseInt(Math.random()*100)%8]}${Math.random().toString().slice(3, 10)}`,
//       avatar: `/avatars/male/avatar${parseInt(Math.random()*100)%40+1}.jpeg`,
//     })
//   }

//   return tmp
// }

// const femaleFunc = count => {
//   const firstNames = ['Maftuna', 'Nodira', 'Muslima', 'Solixa', 'Sora', 'Sofiya', 'Xadicha', 'Robiya', 'Maryam', 'Osiyo']
//   const lastNames = ['Tolipova', 'Sobirova', 'Shokirova', 'Abdullayeva', 'Rustamova', 'Xoliqova', 'Erkinova', 'Nematova', 'Sodiqova', 'Numonova']
//   let numCodes = ['90', '91', '93', '94', '95', '97', '98', '99']

//   let tmp = []

//   for (let i = 0; i < count; i++) {
//     tmp.push({
//       name: {
//         first: `${firstNames[parseInt(Math.random()*100) % 10]}`,
//         last: `${lastNames[parseInt(Math.random()*100) % 10]}`
//       },
//       gender: 'Female',
//       age: `${parseInt(Math.random()*100) % 20 + 20}`,
//       cell: `+998${numCodes[parseInt(Math.random()*100)%8]}${Math.random().toString().slice(3, 10)}`,
//       avatar: `/avatars/female/avatar${parseInt(Math.random()*100)%40+1}.jpeg`,
//     })
//   }

//   return tmp
// }