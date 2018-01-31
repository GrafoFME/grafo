var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'GraFME', isValid: true });
});

router.post('/', function(req, res, next) {
    if (req.body.contra === 'gaussstyle') {
        res.render('grafo');
    } else {
        res.render('index', { title: 'GraFME', isValid: false});
    }
});

module.exports = router;
