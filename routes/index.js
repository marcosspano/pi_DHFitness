var express = require('express');
var router = express.Router();
const IndexController = require ('../controllers/IndexController');

/* GET home page. */
router.get('/', IndexController.index);

router.get('/cp', IndexController.cp);

router.post('/contato', IndexController.contato);

module.exports = router;
