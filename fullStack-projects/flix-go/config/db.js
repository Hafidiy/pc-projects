const mongoose = require('mongoose')

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })

    console.log(`Database: connected: ${conn.connection.host}`.cyan.underline.bold)
  } catch(err){
    console.log(`Error: ${err}`.red)
    process.exit(1)
  }
}

module.exports = connectDB