const mongoose = require('mongoose')

const statusSchema = new mongoose.Schema({
    content: {
    type: String,
    required: true
   },
    image: {
    type: String
   }
    
})

module.exports = mongoose.model('Status', statusSchema)