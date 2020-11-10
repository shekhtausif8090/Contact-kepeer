const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://tausif123:tausif123@contact-kepeer.lsgjf.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('MongoDB Connected')
  } catch (err) {
    console.log(err.msg)
    process.exit(1)
  }
}

module.exports = connectDB