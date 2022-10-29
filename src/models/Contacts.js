const mongooes = require('mongoose');

const contactSchema = mongooes.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    required: true
  }
}, {
  timestamps: true
});

const Contact = mongooes.model('Contact', contactSchema);

module.exports = Contact;