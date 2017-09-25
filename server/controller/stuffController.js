var modelStuff = require('../model/stuff')

var addStuff = (req, res) => {
  modelStuff.create({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
    stock: req.body.stock,
    price: req.body.price,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then((stuff) => {
    res.send(stuff)
  })
  .catch((err) => {
    res.send(err.message)
  })
}

var readStuff = (req, res) => {
  modelStuff.find()
  .then((stuff) => {
    res.send(stuff)
  })
  .catch((err) => {
    res.send(err.message)
  })
}

var editStuff = (req, res) => {
  modelStuff.findByIdAndUpdate({
    _id: req.params.id
  },{
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
    stock: req.body.stock,
    price: req.body.price,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then((stuff) => {
    res.send(stuff)
  })
  .catch((stuff) => {
    res.send(err.message)
  })
}

var deleteStuff = (req, res) => {
  modelStuff.findByIdAndRemove({
    _id: req.params.id
  })
  .then((stuff) => {
    res.send(stuff)
  })
  .catch((err) => {
    res.send(err.message)
  })
}

module.exports = {
  addStuff,
  readStuff,
  editStuff,
  deleteStuff
}
