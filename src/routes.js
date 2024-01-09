//routes.js
const express = require('express');
const router = express.Router();

const filmesController = require('./controllers/filmesController');
const filmesModel = require('./models/filmesModel');

router.get('/filmes', filmesController.buscarTodos);
router.get('/filme/:id', filmesController.buscar);
router.post('/filme', filmesController.inserir);
router.put('/filme/:id', filmesController.alterar);
router.delete('/filme/:id', filmesController.excluir);

module.exports = router;

