let mongoose = require('mongoose')

let contentSchema = new mongoose.Schema({
  type: String,
  content: [{ content: String, alt: String }]
})

var articleSchema = new mongoose.Schema({
  title: 	   { type: String, required: true  },
  subtitle:  { type: String, required: false },
  category:  { type: String, required: true  },
  img: 	     { type: String, required: true  },
  author:    { type: String, required: true  },
  minutes:   { type: Number, required: false },
  created: 	 { type: Date, default: Date.now },
  updated:   { type: Date, default: Date.now },
  content: 	 [ contentSchema ],
  tags: 	   [ String ]
});

module.exports = mongoose.model('article', articleSchema)