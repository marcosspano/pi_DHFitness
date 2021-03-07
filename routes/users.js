var express = require('express');
var router = express.Router();
const UserController = require ('../controllers/UserController')

router.get('/autenticar', UserController.login);
router.post('/autenticar', UserController.authenticate);

router.get('/logout', UserController.logout);

module.exports = router;
