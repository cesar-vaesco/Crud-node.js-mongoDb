const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //Para renderizar la vista
    res.render('index');
})


module.exports = router;