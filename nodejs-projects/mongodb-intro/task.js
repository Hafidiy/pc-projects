const express = require('express')
const { connect, model, Schema } = require('mongoose')

const app = express()

const sizeSchema = new Schema({
  h: Number,
  w: Number,
  uom: String
})

const inventSchema = new Schema({
  item: String,
  qty: Number,
  size: sizeSchema,
  status: String
}, { collection: 'inventory' })

const Inventory = model('Inventory', inventSchema)

const getInventories = async () => {
  const inventories = await Inventory
    .find(
      {
        $or: [
          {qty: { $lte: 50 }},
          { item: /.*l.*/ }
        ]
      },
    )
    .sort({qty: -1})
  console.log(inventories)
}

getInventories()

connect('mongodb://localhost/mongodb-intro', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ', err))

const PORT = process.env.PORT || 7000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))