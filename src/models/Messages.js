const mongooes = require('mongoose');

const messageSchema = mongooes.Schema({
  message: {
    type: String,
    required: true
  },
  contactNumber: {
    type: Number,
    required: true
  },
  contactName: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

const Message = mongooes.model('Message', messageSchema);

module.exports = Message;