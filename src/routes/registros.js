const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');
const autosController = require('../controllers/autosController');
/**
 * Admin
 */
router.get('/', autosController.index);
// CRUD Autos///
router.get('/autos', autosController.listAutos);
router.get('/autos/new', autosController.new);
router.post('/autos/add', autosController.add);

router.get('/autos/edit/:id', autosController.edit);
router.put('/autos/update/:id', autosController.update);
router.get('/autos/delete/:id', autosController.delete);
router.delete('/autos/delete/:id', autosController.destroy);

/* Registros */
router.get('/registros', registroController.list);
router.get('/new', registroController.new);
router.post('/add', registroController.add);

module.exports = router;
