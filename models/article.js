const mongoose = require('mongoose');

//table of database with the columns
const articleSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    markdown: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  })

  module.exports = mongoose.model('Article', articleSchema)