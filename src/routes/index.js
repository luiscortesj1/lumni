const express = require('express');
const router = express.Router();
const generalController = require('../controllers/generalController');

router.get('/', generalController.index);
router.get('/empleados', generalController.list);

module.exports = router;