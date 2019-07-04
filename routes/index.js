var express = require('express')
var router = express.Router()

var postCtrl = require('../controllers/post')
//edit routes

router.get('/', postCtrl.index)
router.post('/', postCtrl.create)
router.get('/:id', postCtrl.show)
router.delete('/:id/delete', postCtrl.delete)

module.exports = router
