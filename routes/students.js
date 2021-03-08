var express = require('express');
var router = express.Router();
const StudentsController = require('../controllers/StudentsController');

router.get('/listar', StudentsController.list);
router.post('/listar', StudentsController.list);

router.get('/registrar', StudentsController.create);
router.post('/registrar', StudentsController.save);

router.get('/alterar/:id', StudentsController.edit);
router.post('/alterar/:id', StudentsController.update);

router.get('/excluir/:id', StudentsController.delete);

module.exports = router;