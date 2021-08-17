const mongoose = require('mongoose');

const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

exports.module = mongoose.model('messageContent', whatsappSchema);
