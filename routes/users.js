var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    res.json({
        id: 1,
        email: "matti@gmail.com",
        name: "Matti Saemi"
    });
});

module.exports = router;
