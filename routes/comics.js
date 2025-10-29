const comicsController = require('../controllers/comics');
const router = require('express').router();

router.get('/', comicsController.getComics);

module.exports = router;
