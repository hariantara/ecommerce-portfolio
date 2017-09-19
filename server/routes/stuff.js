var express = require('express');
var router = express.Router();
var controller = require('../controller/stuffController')

router.post('/add', controller.addStuff)
router.get('/read', controller.readStuff)
router.put('/edit/:id', controller.editStuff)
router.delete('/deletestuff/:id', controller.deleteStuff)

module.exports = router
