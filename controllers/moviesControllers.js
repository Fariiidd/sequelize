let db = require('../database/models');
let sequelize = db.sequelize;

let moviesControllers =  {
   list: function(req, res){
    db.Movies.findAll()
       .then(function (movies){
           res.render("listMovies", {movies: movies});
       })
   },

   detailMovie: function(req, res){
       db.Movies.findByPk(req.params.id)
       .then(function(movie){
           res.render('detailMovie', {movies: movie});
       })
   },

   newMovie: function(req, res){
       db.Movies.findAll({
           order:[
               ['release_date', 'DESC'],
           ],
           limit: 5
       })
       .then(function(premieres){
           res.render('newMovies', {movies: premieres})
       })
   },

   serchMovie: (function(req, res){
       db.Movies.findAll(req.params.serch)
       .then(function(result){
           res.render('listMovies', {movies: result})
       })
   })


}

module.exports = moviesControllers;