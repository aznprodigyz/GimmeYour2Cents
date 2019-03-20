var mongoose = require('mongoose');

var Options = mongoose.model('Options', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  choice: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  count: {
    type: Number,
    default: null
  },
  img: {
    type: String,
    minlength: 1
  },
});

module.exports = {Options};
