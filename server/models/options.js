var mongoose = require('mongoose');

var Options = mongoose.model('Options', {
  choice: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  count: {
    type: Number,
    default: null
  }
});

module.exports = {Options};
