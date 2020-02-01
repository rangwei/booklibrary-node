const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {res.send('Wiki home')});

router.get('/about', (req, res) => {res.send('Wiki About')});

module.exports = router;

