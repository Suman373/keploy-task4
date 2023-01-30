const express = require('express');
const router = express.Router();
const {getAllEbooks, addEbook} = require('../controller/EbookController');

router.get('/' , getAllEbooks);
router.post('/', addEbook);

module.exports = router;