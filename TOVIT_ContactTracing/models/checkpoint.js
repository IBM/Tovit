const mongoose = require('mongoose')

const checkpointSchema = new mongoose.Schema({
  key: String,
  timestamp: Number
})

const Checkpoint = mongoose.model('Checkpoint', checkpointSchema)

module.exports = Checkpoint
