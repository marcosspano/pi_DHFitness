var express = require('express');
var router = express.Router();
const StudentsController = require('../controllers/StudentsController');

router.get('/listar', StudentsController.list);
router.post('/registrar', StudentsController.create);

router.get('/alterar/:id', StudentsController.edit);
router.post('/alterar/:id', StudentsController.update);

router.get('/excluir/:id', StudentsController.delete);

module.exports = router;