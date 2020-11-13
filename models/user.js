const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /(http|https):\/\/([\w/.!&#@-]*).([a-z]{2,})([\w/.!&#@-]*)/gi;
        return regex.test(v);
      },
      message: 'Нужно указать ссылку',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
