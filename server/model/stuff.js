var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blacksmith');

var Schema = mongoose.Schema;

var StuffSchema = new Schema({
  userdata: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  image: String,
  description: String,
  category: String,
  stock: Number,
  price: String,
  createdAt: Date,
  updatedAt: Date
})

var stuffModels = mongoose.model('Stuff', StuffSchema)

module.exports = stuffModels
