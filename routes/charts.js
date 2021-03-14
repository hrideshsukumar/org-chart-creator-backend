const express = require('express');
const router = express.Router();

const chartsController = require('../controllers/chartsController');

/* GET charts listing. */
router.get('/', chartsController.charts_list);

/* POST charts listing. */
router.post('/', chartsController.charts_create_post);


module.exports = router;
