var express = require('express');
var router = express.Router();
let moviesControllers = require('../controllers/moviesControllers')

/* GET home page. */
router.get('/', moviesControllers.list);
router.get('/new', moviesControllers.newMovie);
router.get('/:id', moviesControllers.detailMovie);

router.post('/search', moviesControllers.searchMovie)


module.exports = router;
