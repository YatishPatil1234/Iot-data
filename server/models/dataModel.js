const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  value: Number,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
