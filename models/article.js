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
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    sanitizedHtml: {
      type: String,
      required: true
    }
  })

  module.exports = mongoose.model('Article', articleSchema)